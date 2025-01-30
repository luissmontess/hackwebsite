import TalaveraBackground from "./components/TalaveraBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
          <div className=" w-200 h-50 bg-slate-200 rounded-2xl">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">
            Bienvenid@ a <span className="text-blue-600">Hack Puebla</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            Construye, Innova y Compite para crear el futuro.
          </p>
          <a
            href="#register"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            ¡Regístrate Ahora!
          </a>
          </div>
        </section>
      </TalaveraBackground>

      {/* About Section */}
      <TalaveraBackground>
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ¿Qué es Hack Puebla?
          </h2>
          <p className="text-lg max-w-2xl text-gray-600">
            Hack Puebla es una competencia de programación y emprendimiento
            donde estudiantes, profesionistas y entusiastas de la tecnología
            se reúnen para crear soluciones innovadoras a los problemas
            más relevantes de la actualidad. ¡Únete y pon a prueba tu
            creatividad!
          </p>
        </section>
      </TalaveraBackground>

      {/* Events Section */}
      <section
        id="events"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Eventos</h2>
        <p className="text-lg max-w-2xl text-gray-600 mb-8">
          Durante Hack Puebla podrás participar en diferentes retos, talleres
          y conferencias.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
          {/* Ejemplo de "cards" de eventos */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Taller de IA</h3>
            <p className="text-sm text-gray-500 mb-4">
              Aprende a implementar modelos de Machine Learning.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Más info
            </button>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Charla de Startups</h3>
            <p className="text-sm text-gray-500 mb-4">
              Fundadores de empresas tecnológicas comparten sus experiencias.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Más info
            </button>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Reto de Programación</h3>
            <p className="text-sm text-gray-500 mb-4">
              Compite con otros desarrolladores para resolver problemas
              complejos.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Más info
            </button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <TalaveraBackground>
        <section
          id="sponsors"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Patrocinadores</h2>
          <p className="text-lg max-w-2xl text-gray-600 mb-8">
            Gracias a nuestros patrocinadores que hacen posible este evento.
          </p>

          {/* Ejemplo de logos (se pueden reemplazar con imágenes reales) */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
              Logo 1
            </div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
              Logo 2
            </div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
              Logo 3
            </div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
              Logo 4
            </div>
          </div>
        </section>
      </TalaveraBackground>

      {/* Contact Section */}
      <TalaveraBackground>
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
      </TalaveraBackground>

      <Footer />
    </>
  );
}

export default App;