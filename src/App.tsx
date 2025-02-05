import TalaveraBackground from "./components/TalaveraBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Schedule from "./components/Schedule";
import CountdownBox from "./components/CountdownBox";
import Faq from "./components/Faq";
import './App.css'
import SponsorsComponent from "./components/SponsorsComponent";
import { useEffect, useState } from "react";
function App() {
  const eventDate = new Date("2025-06-18T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
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
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 "
        >
          <div className="p-2 bg-[rgba(226,232,240,0.9)] rounded-2xl shadow-2xl">
            {/* <img src="/hack_logo_bgrm2.png" alt="TecBytes Logo" className="mx-auto w-72 sm:w-96 mb-4" /> */}
            <img src="/logo_hack_est.png" alt="TecBytes Logo" className="mx-auto w-72 sm:w-96 mb-4" />
          </div>

          {/* Countdown Container */}
          <div className="mt-6 flex w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden">
            {/* Left Side - Event Date */}
            <div className="w-1/2 bg-slate-200 flex items-center justify-center text-slate-800 p-6">
              <p className="text-5xl font-extrabold font-primary text-slate-800">June 18 - 19, 2025</p>
            </div>

            {/* Right Side - Countdown Timer */}
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
        </section>
      </TalaveraBackground>

      {/* About Section */}
      <About />

      {/* Schedule Section */}
      <Schedule />

      {/* Sponsors Section */}
      <SponsorsComponent />

      {/* Contact Section */}
      <Faq /> 

      <Footer />
    </>
  );
}

export default App;
