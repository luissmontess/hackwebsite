import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt"

export default function SponsorsComponent() {
    const sponsors = [
        { name: "Logo 2", image: "ellucian_logo.png" },
        { name: "Logo 3", image: "ellucian_logo.png" },
        { name: "Logo 1", image: "ellucian_logo.png" },
        { name: "Logo 4", image: "ellucian_logo.png" },
        { name: "Logo 5", image: "ellucian_logo.png" },
        { name: "Logo 6", image: "ellucian_logo.png" },
    ];

    return (
        <motion.section
            id="sponsors"
            variants={staggerContainer(0.1, 0.25)} // Se pasan los parámetros requeridos
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-gray-50"
        >
            <motion.h2
                className="text-3xl font-bold text-gray-800 mb-8"
                variants={fadeIn("up", "tween", 0.2, 1)}
            >
                Patrocinadores
            </motion.h2>
            <motion.p
                className="text-lg max-w-2xl text-gray-600 mb-8"
                variants={fadeIn("up", "tween", 0.3, 1)}
            >
                Gracias a nuestros patrocinadores que hacen posible este evento.
            </motion.p>


            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {sponsors.map((sponsor, index) => (
                    <Tilt key={index}>
                        <motion.div
                            key={index}
                            variants={fadeIn("up", "tween", 0.5 + index * 0.1, 1)}
                            className="bg-white shadow-xl p-6 rounded-lg flex items-center justify-center w-full h-40"
                        >
                            <img
                                src={sponsor.image}
                                alt={`Logo de ${sponsor.name}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </motion.section>
    );
}
