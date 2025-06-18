// MemberCard.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

type MemberCardProps = {
  name: string;
  role: string;
  image_name: string;
  description: string;
  linkedin: string;
};

export default function MemberCard({
  name,
  role,
  image_name,
  description,
  linkedin,
}: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-48 h-80 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped((f) => !f)}
    >
      <motion.div
        className="absolute inset-0 rounded-lg shadow-lg"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-gray-700 text-white flex flex-col items-center p-4 rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image container */}
          <div className="w-full h-48 mb-2 flex-shrink-0">
            <img
              src={image_name}
              alt={name}
              className="w-full h-full object-contain rounded-sm"
            />
          </div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-sm text-gray-300">{role}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-gray-900 text-white flex flex-col items-center p-4 rounded-lg overflow-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-sm text-gray-300 mt-2 text-center flex-grow overflow-auto">
            {description}
          </p>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <FaLinkedin className="text-blue-500 hover:text-blue-400" size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
