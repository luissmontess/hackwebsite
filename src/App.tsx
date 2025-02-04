import TalaveraBackground from "./components/TalaveraBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Schedule from "./components/Schedule";
import './App.css'
import SponsorsComponent from "./components/SponsorsComponent";
function App() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <TalaveraBackground>
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 "
        >
          <div className="p-10 bg-[rgba(226,232,240,0.7)] rounded-2xl">
            <img src="/hack_logo_bgrm2.png" alt="TecBytes Logo" className="mx-auto w-72 sm:w-96 mb-4" />
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
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contáctanos</h2>
        <p className="text-lg max-w-2xl text-gray-600 mb-8">
          ¿Tienes dudas o quieres más información? ¡Escríbenos!
        </p>
        <a
          href="mailto:hackpuebla@ejemplo.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Enviar Correo
        </a>
      </section>

      <Footer />
    </>
  );
}

export default App;