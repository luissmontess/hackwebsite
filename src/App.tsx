import { useEffect, useState } from "react";
import TalaveraBackground from "./components/TalaveraBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Schedule from "./components/Schedule";
import CountdownBox from "./components/CountdownBox";
import Faq from "./components/Faq";
import SponsorsComponent from "./components/SponsorsComponent";
import './App.css';

function App() {
  const eventDate = new Date("2025-06-18T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Event has started
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <TalaveraBackground>
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8"
        >
          <div className="mt-10"></div>
          <div className="p-2 bg-[rgba(226,232,240,0.9)] rounded-2xl shadow-2xl">
            <img src={`logo_hack_est.png`} alt="TecBytes Logo" className="mx-auto w-72 sm:w-96 mb-4" />
          </div>

          {/* Conditional Rendering */}
          {isSmallScreen ? (
            /* Only show date centered */
            <div className="w-full flex items-center justify-center text-slate-800 bg-slate-200 p-6 text-center">
              <p className="text-3xl sm:text-5xl font-extrabold font-primary">
                June 17 - 18, 2025
              </p>
            </div>
          ) : (
            /* Show both date and countdown */
            <div className="mt-6 flex w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden">
              {/* Event Date */}
              <div className="w-full bg-slate-200 flex items-center justify-center text-slate-800 p-6">
                <p className="text-3xl sm:text-5xl font-extrabold font-primary">
                  June 17 - 18, 2025
                </p>
              </div>

              {/* Countdown Timer */}
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
        </section>
      </TalaveraBackground>

      {/* Other Sections */}
      <About />
      <Schedule />
      <SponsorsComponent />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
