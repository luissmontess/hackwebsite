import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt"

export default function SponsorsComponent() {
    const sponsors = [
        { name: "Logo 2", image: "ellucian_logo.png", url: "https://www.ellucian.com/"},
        { name: "Logo 3", image: "syntaxlogo.png", url:"https://www.syntax.com/" },
    ];

    return (
        <motion.section
            id="sponsors"
            variants={staggerContainer(0.1, 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-gray-50"
        >
            <motion.h2
                className="text-3xl font-bold text-gray-800 mb-8"
                variants={fadeIn("up", "tween", 0.2, 1)}
            >
                Sponsors
            </motion.h2>
            <motion.p
                className="text-lg max-w-2xl text-gray-600 mb-8"
                variants={fadeIn("up", "tween", 0.3, 1)}
            >
                Thanks to our sponsors who make this event possible.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl w-full justify-items-center">
                {sponsors.map((sponsor, index) => (
                    <a 
                        key={index} 
                        href={sponsor.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Tilt>
                            <motion.div
                                variants={fadeIn("up", "tween", 0.5 + index * 0.1, 1)}
                                className="bg-white shadow-xl p-6 rounded-lg flex items-center justify-center w-full h-40"
                            >
                                <img
                                    src={sponsor.image}
                                    alt={`Logo of ${sponsor.name}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </motion.div>
                        </Tilt>
                    </a>
                ))}
            </div>
        </motion.section>
    );
}
