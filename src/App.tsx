// src/App.tsx

import React, { useEffect, useState } from 'react';
import TalaveraBackground from './components/TalaveraBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Schedule from './components/Schedule';
import CountdownBox from './components/CountdownBox';
import Faq from './components/Faq';
import SponsorsComponent from './components/SponsorsComponent';
import './App.css';

// Definimos la estructura del tiempo restante
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Definimos las props para MLHTrustBadge
interface MLHTrustBadgeProps {
  isSmallScreen: boolean;
}

// Componente MLHTrustBadge
const MLHTrustBadge: React.FC<MLHTrustBadgeProps> = ({ isSmallScreen }) => {
  // Estilo para pantallas grandes (computadora)
  const styleLarge: React.CSSProperties = {
    display: 'block',
    maxWidth: '120px',
    minWidth: '60px',
    position: 'fixed',
    left: '50px',
    top: '0',
    width: '40%',
    zIndex: 10000,
  };

  // Estilo para pantallas pequeñas
  const styleSmall: React.CSSProperties = {
    display: 'block',
    maxWidth: '90px',
    minWidth: '60px',
    position: 'fixed',
    right: '70px',
    top: '0',
    width: '40%',
    zIndex: 10000,
  };

  return (
    <a
      id="mlh-trust-badge"
      style={isSmallScreen ? styleSmall : styleLarge}
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=blue"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg"
        alt="Major League Hacking 2026 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>
  );
};

// Función para calcular el tiempo restante
function calculateTimeLeft(eventDate: number): TimeLeft {
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

// Componente principal de la App
const App: React.FC = () => {
  const eventDate = new Date('2025-08-15T10:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(eventDate));
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth <= 900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [eventDate]);

  return (
    <>
      <Header />

      <MLHTrustBadge isSmallScreen={isSmallScreen} />

      {/* Hero Section con mayor margen-top en móviles */}
      <TalaveraBackground>
        <section
          id="hero"
          className="
            mt-16        /* móvil: 4rem */
            sm:mt-8      /* ≥640px: 2rem */
            min-h-screen
            flex flex-col items-center justify-center text-center
            px-4 sm:px-8
          "
        >
          {/* LOGO CON FONDO DE VIDRIO */}
          <div className="p-4 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 mb-6">
            <img
              src="logo_hack.png"
              alt="TecBytes Logo"
              className="mx-auto w-72 sm:w-96"
            />
          </div>

          {/* ========== CONTENEDOR RESPONSIVO PARA FECHA Y COUNTDOWN ========== */}
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch gap-14">
            {/* RECTÁNGULO DE LA FECHA */}
            <div className="w-full lg:w-1/2 bg-white/20 backdrop-blur-lg flex items-center justify-center text-white p-6 rounded-2xl shadow-2xl border border-white/30">
              <p className="text-3xl sm:text-5xl font-extrabold font-primary">
                August 16 - 17, 2025
              </p>
            </div>

            {/* RECTÁNGULO DEL COUNTDOWN */}
            <div className="w-full lg:w-1/2 bg-blue-950/40 backdrop-blur-lg flex items-center justify-center p-6 rounded-2xl shadow-2xl border border-white/30">
              <div className="flex space-x-4 text-3xl text-slate-200 font-bold">
                <CountdownBox label="Days" value={timeLeft.days} />
                <span>:</span>
                <CountdownBox label="Hours" value={timeLeft.hours} />
                <span>:</span>
                <CountdownBox label="Minutes" value={timeLeft.minutes} />
                <span>:</span>
                <CountdownBox label="Seconds" value={timeLeft.seconds} />
              </div>
            </div>
          </div>

          {/* Botón de Registro sólo en pantallas pequeñas */}
          {isSmallScreen && (
            <a
              href="https://events.mlh.io/events/12506-hackpue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg mt-8 shadow-lg transition-colors duration-300"
            >
              Register
            </a>
          )}
        </section>
      </TalaveraBackground>

      <About />
      <Schedule />
      <SponsorsComponent />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
