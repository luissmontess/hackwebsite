import { FaInstagram } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        // Scroll hacia abajo
        setIsVisible(true);
      } else {
        // Scroll hacia arriba
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Verificar posición inicial al montar
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-slate-900 text-white py-4 px-8 shadow-lg z-50 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Hack<span className="font-primary text-blue-400">Puebla0111</span>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-sm sm:text-base">
            <li>
              <a
                href="#hero"
                className="font-bold hover:text-blue-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-bold hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="font-bold hover:text-blue-400 transition-colors"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                className="font-bold hover:text-blue-400 transition-colors"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-bold hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hackpuebla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;