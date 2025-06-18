import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 text-white py-4 px-8 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:pl-50 font-bold">
          Hack<span className="text-blue-400">Puebla0111</span>
        </h1>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-14 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent md:flex md:items-center md:space-x-6 text-sm sm:text-base transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            {[ 
              { name: "Home", link: "#hero" },
              { name: "About", link: "#about" },
              { name: "Schedule", link: "#schedule" },
              { name: "Sponsors", link: "#sponsors" },
              { name: "FAQ", link: "#faq" },
            ].map(({ name, link }) => (
              <li key={name}>
                <a
                  href={link}
                  className="font-bold hover:text-blue-400 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}

            {/* Registration Button */}
            <li>
              <div
                className={`px-4 py-1 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition block`}
                
              >
                <a href="https://events.mlh.io/events/12506-hackpue" target="_blank">
                Register
                </a>
              </div>
            </li>

            {/* Instagram Icon */}
            <li>
              <a
                href="https://www.instagram.com/hackpuebla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors block py-2"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
