// Ya no necesitamos 'motion', 'staggerContainer' ni 'fadeIn'
import TiltedCard from "./utils/TiltedCard";

export default function SponsorsComponent() {
    const sponsors = [
        { name: "Ellucian", image: "ellucian_logo.png", url: "https://www.ellucian.com/" },
        { name: "Syntax", image: "syntaxlogo.png", url: "https://www.syntax.com/" },
    ];

    return (
        // 1. Convertimos 'motion.section' en una 'section' normal y quitamos las props de animación
        <section
            id="sponsors"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-gray-50"
        >
            {/* 2. Convertimos los elementos de texto a h2 y p normales */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Sponsors
            </h2>
            <p className="text-lg max-w-2xl text-gray-600 mb-8">
                Gracias a nuestros patrocinadores que hacen posible este evento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full justify-items-center">
                {sponsors.map((sponsor, index) => (
                    // 3. Aplicamos los estilos de la tarjeta (fondo, sombra, padding) directamente al enlace <a>
                    // que actúa como contenedor. Esto restaura la apariencia del código comentado.
                    <a
                        key={index}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" shadow-xl rounded-lg py-6 px-12 flex items-center justify-center w-full h-auto transform transition-transform duration-300 "
                    >
                        <TiltedCard
                            // 4. Ajustamos las props para que sean más flexibles y se vean bien dentro del contenedor
                            imageSrc={`/${sponsor.image}`} // Asegúrate de que la ruta a la imagen sea correcta (p.ej. desde la carpeta /public)
                            altText={`Logo de ${sponsor.name}`}
                            captionText={sponsor.name}
                            containerHeight="80px" // Un tamaño más manejable
                            containerWidth="1100px"
                            imageHeight="100%"     // La imagen ocupa todo el alto del TiltedCard
                            imageWidth="100%"      // La imagen ocupa todo el ancho del TiltedCard
                            rotateAmplitude={10}
                            scaleOnHover={1.1}     // El efecto de escala lo maneja TiltedCard
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={false} // Desactivamos el overlay para usar solo el tooltip
                        />

                        {/* 5. Eliminamos el bloque de código comentado que usaba framer-motion */}
                    </a>
                ))}
            </div>
        </section>
    );
}