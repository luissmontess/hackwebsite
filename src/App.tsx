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
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=blue"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg"
        alt="Major League Hacking 2025 Hackathon Season"
        style={{ width: '100%' }}
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
  const eventDate = new Date('2025-06-14T00:00:00').getTime();
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

      {/* Hero Section */}
      <TalaveraBackground>
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8"
        >
          <div className="mt-10"></div>
          <div className="p-2 bg-[rgba(226,232,240,0.9)] rounded-2xl shadow-2xl">
            <img
              src="logo_hack_est.png"
              alt="TecBytes Logo"
              className="mx-auto w-72 sm:w-96 mb-4"
            />
          </div>

          {isSmallScreen ? (
            <div className="w-full flex items-center justify-center text-slate-800 bg-slate-200 p-6 text-center">
              <p className="text-3xl sm:text-5xl font-extrabold font-primary">
                June 14 - 15, 2025
              </p>
            </div>
          ) : (
            <div className="mt-6 flex w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden">
              <div className="w-full bg-slate-200 flex items-center justify-center text-slate-800 p-6">
                <p className="text-3xl sm:text-5xl font-extrabold font-primary">
                  June 14 - 15, 2025
                </p>
              </div>
              <div className="w-1/2 bg-slate-800 flex items-center justify-center p-6">
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
          )}

          {/* Botón de Registro solo en pantallas pequeñas */}
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
