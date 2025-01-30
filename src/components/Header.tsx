const Header = () => {
    return (
      <header className="fixed top-0 left-0 w-full bg-slate-900 text-white py-4 px-8 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Hack <span className="text-blue-400">Puebla</span>
          </h1>
          <nav>
            <ul className="flex space-x-6 text-sm sm:text-base">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-blue-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-blue-400 transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  