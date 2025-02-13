const Footer = () => {
    return (
      <footer className="bg-slate-900 text-white py-6 px-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Hack Puebla. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors text-sm"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors text-sm"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  