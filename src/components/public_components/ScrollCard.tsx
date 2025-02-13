import { motion } from "framer-motion"
import { useState } from "react";

type CardProps = {
    hour: string, 
    title: string, 
    description: string
}

export default function ScrollCard({ hour, title, description } : CardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-40 perspective-1000 cursor-pointer mb-4"
            onClick={() => setIsFlipped(!isFlipped)}
        >
        <motion.div
            className="absolute w-full h-full rounded-lg shadow-md"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Front Side */}
            <div className="absolute w-full h-full bg-slate-800 text-white flex flex-col items-center justify-center rounded-lg backface-hidden">
                <h4 className="text-lg font-bold">{hour}</h4>
                <p className="text-sm">{title}</p>
            </div>

            {/* Back Side */}
            <div
                className="absolute w-full h-full bg-blue-700 text-white flex flex-col items-center justify-center rounded-lg p-4 backface-hidden"
                style={{ transform: "rotateY(180deg)" }}
            >
                <p className="text-sm">{description}</p>
            </div>
        </motion.div>
        </div>
    )
}
