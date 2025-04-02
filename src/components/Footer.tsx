const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 px-8">
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-2">
        {/* Enlaces en la parte superior */}
        <div className="flex flex-wrap items-center justify-center space-x-4 text-sm">
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            MLH Code of Conduct
          </a>

          <span>|</span>

          <a
            href="mailto:pabloarmando.macbeath@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © 2016 - {new Date().getFullYear()} Hack Puebla. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
