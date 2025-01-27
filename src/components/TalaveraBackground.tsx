import React, { useEffect, useRef, useState } from "react";
import { generateShapeGrid } from "../helpers/shape_functions";
import Shape from "./shape";

const TalaveraBackground = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [grid, setGrid] = useState<{ rows: number; cols: number }>({ rows: 0, cols: 0 });
    const [shapeGrid, setShapeGrid] = useState<any[]>([]);

    useEffect(() => {
        const updateGrid = () => {
        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;
            const rows = Math.ceil(offsetHeight / 50); // Each cell is 50px
            const cols = Math.ceil(offsetWidth / 50);
            setGrid({ rows, cols });
            setShapeGrid(generateShapeGrid(rows, cols));
        }
        };

        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden">
        {/* Background Grid */}
        <div
            className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-200"
            style={{
            display: "grid",
            gridTemplateRows: `repeat(${grid.rows}, 50px)`,
            gridTemplateColumns: `repeat(${grid.cols}, 50px)`,
            }}
        >
            {shapeGrid.map((block, index) => (
            <Shape
                key={block.id}
                shape={block.shape}
                color={block.color}
                className={
                (index % 50 === 0 || index % 21 === 0) ? 
                `animate-rotation duration-${index % 50 === 0 ? 5000 : 2000}` : 
                ""
                }
                style={{
                animationDelay: index % 21 === 0 ? `0.1s` : `0s`,
                }}
            />
            ))}
        </div>

        {/* Content Layer */}
        <div className="relative z-10">{children}</div>
        </div>
    );
};

export default TalaveraBackground;
