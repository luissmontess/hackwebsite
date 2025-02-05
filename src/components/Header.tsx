import { FaInstagram } from "react-icons/fa";
const Header = () => {
    return (
      <header className="fixed top-0 left-0 w-full bg-slate-900 text-white py-4 px-8 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Hack<span className="font-primary text-blue-400">Puebla0111</span>
          </h1>
          <nav>
            <ul className="flex space-x-6 text-sm sm:text-base">
              <li>
                <a href="#hero" className="font-bold hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="font-bold hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#schedule" className="font-bold hover:text-blue-400 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#sponsors" className="font-bold hover:text-blue-400 transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#faq" className="font-bold hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              {/* Instagram Icon in the Nav List */}
              <li>
                <a
                  href="https://www.instagram.com/hackpuebla" // Replace with your actual Instagram link
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
  