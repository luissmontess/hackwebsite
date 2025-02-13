import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

type PathDrawBoxProps = {
    children: React.ReactNode;
    strokeWidth?: number;
    strokeColor?: string;
    duration?: number;
}
  

export default function PathDrawBox({ 
    children, 
    strokeWidth = 2, 
    strokeColor = "black",
    duration = 1.5,
} : PathDrawBoxProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(wrapperRef, { once: false, margin: "-10% 0px -10% 0px" });
    
    const [size, setSize] = useState({ width: 0, height: 0 });

    // Measure element dimensions
    useEffect(() => {
        if (wrapperRef.current) {
        const { offsetWidth, offsetHeight } = wrapperRef.current;
        setSize({ width: offsetWidth, height: offsetHeight });
        }
    }, [children]);

    return (
    <div ref={wrapperRef} className="relative inline-block">
        {/* Wrapped Content */}
        <div className="relative z-10">{children}</div>

        {/* SVG Animated Box */}
        <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            width={size.width}
            height={size.height}
        >
            <motion.rect
            x="0"
            y="0"
            width={size.width}
            height={size.height}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 0.9 : 0 }}
            transition={{ duration, ease: "easeInOut" }}
            />
        </svg>
        </div>
    );
}
