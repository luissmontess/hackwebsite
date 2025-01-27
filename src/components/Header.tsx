const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-slate-900 text-white py-4 px-8 shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Hack Puebla</h1>
                <nav>
                    <ul className="flex space-x-4">
                    <li>
                        <a href="#about" className="hover:underline">
                        About
                        </a>
                    </li>
                    <li>
                        <a href="#events" className="hover:underline">
                        Events
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">
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
  