import { useEffect, useState } from "react";

const MLHTrustBadge = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ajusta la posición según el tamaño de pantalla
  const badgeStyle = isSmallScreen
    ? {
        display: "block",
        maxWidth: "80px",
        minWidth: "50px",
        right: "20px",
        top: "70px", // se mueve hacia abajo para no tapar el header
        zIndex: "10000",
      }
    : {
        display: "block",
        maxWidth: "100px",
        minWidth: "60px",
        right: "50px",
        top: "0",
        zIndex: "10000",
      };

  return (
    <a
      id="mlh-trust-badge"
      style={badgeStyle}
    
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=blue"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg"
        alt="Major League Hacking 2025 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>
  );
};

export default MLHTrustBadge;
