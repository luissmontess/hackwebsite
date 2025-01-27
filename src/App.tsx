import TalaveraBackground from "./components/TalaveraBackground";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* Persistent Header */}
      <Header />

      {/* Sections with TalaveraBackground */}
      <TalaveraBackground>
        <section id="about" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Welcome to the Hackathon</h2>
          <p className="text-lg mt-4 text-gray-600">Build, Innovate, and Compete.</p>
        </section>
      </TalaveraBackground>

      {/* <TalaveraBackground> */}
        <section id="events" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Events</h2>
          <p className="text-lg mt-4 text-gray-600">Explore our exciting events.</p>
        </section>
      {/* </TalaveraBackground> */}

      <TalaveraBackground>
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-lg mt-4 text-gray-600">Get in touch for more information.</p>
        </section>
      </TalaveraBackground>
    </>
  );
}

export default App;
