import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react";
import ScrollCard from "./ScrollCard";

type ScrollProps = {
    title: string, 
    data: {
        hour: string, 
        title: string, 
        description: string
    }[]
}

export default function ScrollColumn({ title, data } : ScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollY = useMotionValue(0);
    const [maxScroll, setMaxScroll] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                scrollY.set(scrollRef.current.scrollTop);
                setMaxScroll(scrollRef.current.scrollHeight - scrollRef.current.clientHeight);
            }
        };
    
        const refElement = scrollRef.current;
        refElement?.addEventListener("scroll", handleScroll);
        return () => refElement?.removeEventListener("scroll", handleScroll);
    }, [scrollRef, scrollY]);

    const progress = useTransform(scrollY, [0, maxScroll], ["0%", "100%"]);
    
    return (
        <div className="relative w-1/2 flex flex-col items-center">
            <h3 className="font-primary mt-1 text-xl font-semibold text-gray-700 mb-2">{title}</h3>

            {/* Progress Bar (Above Cards) */}
            <motion.div
                className="absolute top-0 left-0 h-1 bg-slate-800"
                style={{ width: progress }}
            />

            {/* Scrollable Schedule List */}
            <div
                ref={scrollRef}
                className="w-full max-h-[500px] overflow-y-scroll scrollbar-hide p-4 bg-white rounded-lg shadow-lg"
            >
                {data.map((event, index) => (
                    <ScrollCard key={index} hour={event.hour} title={event.title} description={event.description} />
                ))}
            </div>
        </div>
    )
}
