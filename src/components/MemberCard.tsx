import { motion } from "framer-motion";
import { useState } from "react";

type MemberCardProps = {
    name: string, 
    role: string, 
    image_name: string, 
    description: string
}
export default function MemberCard({name, role, image_name, description} : MemberCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div
          className="relative w-48 h-64 perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="absolute w-full h-full rounded-lg shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full bg-gray-700 text-white flex flex-col items-center justify-center rounded-lg backface-hidden">
                    <img
                        src={`${image_name}`}
                        alt={name}
                        className="w-max-full h-40 mb-2 object-cover rounded-sm"
                    />
                    <h4 className="text-lg font-bold">{name}</h4>
                    <p className="text-sm text-gray-300">{role}</p>
                </div>
        
                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center rounded-lg p-4 backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <h4 className="text-lg font-bold">{name}</h4>
                    <p className="text-gray-300 text-sm mt-2">{description}</p>
                </div>
            </motion.div>
        </div>
      );
}
