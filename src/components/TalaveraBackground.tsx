// components/TalaveraBackground.tsx

import React, { useEffect, useRef, useState, useCallback } from "react";
import { generateShapeGrid } from "../helpers/shape_functions";
import Shape from "./shape";
import gsap from "gsap";

const MOUSE_EFFECT_CONFIG = {
    radius: 4,
    maxAngle: 60,
    enterDuration: 0.3,
    leaveDuration: 0.8,
    easing: "power3.out"
};

const TalaveraBackground = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [grid, setGrid] = useState<{ rows: number; cols: number }>({ rows: 0, cols: 0 });
    const [shapeGrid, setShapeGrid] = useState<any[]>([]);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const updateGrid = () => {
            if (containerRef.current) {
                const { offsetWidth, offsetHeight } = containerRef.current;
                const rows = Math.ceil(offsetHeight / 50);
                const cols = Math.ceil(offsetWidth / 50);
                setGrid({ rows, cols });
                setShapeGrid(generateShapeGrid(rows, cols));
            }
        };
        updateGrid();
        // window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    const applyTransformations = useCallback((centerRow: number, centerCol: number) => {
        if (!containerRef.current) return;
        const shapes = containerRef.current.querySelectorAll('.shape-item');
        const { radius, maxAngle, enterDuration, leaveDuration, easing } = MOUSE_EFFECT_CONFIG;
        shapes.forEach(shapeEl => {
            const shape = shapeEl as HTMLElement;
            const row = parseInt(shape.dataset.row || '0', 10);
            const col = parseInt(shape.dataset.col || '0', 10);
            const distance = Math.hypot(row - centerRow, col - centerCol);
            if (distance < radius) {
                const percentage = 1 - (distance / radius);
                const angle = percentage * maxAngle;
                gsap.to(shape, { duration: enterDuration, ease: easing, rotateX: -angle, rotateY: angle, overwrite: true });
            } else {
                gsap.to(shape, { duration: leaveDuration, ease: "power3.out", rotateX: 0, rotateY: 0, overwrite: true });
            }
        });
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerCol = (e.clientX - rect.left) / 50;
        const centerRow = (e.clientY - rect.top) / 50;
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = requestAnimationFrame(() => applyTransformations(centerRow, centerCol));
    }, [applyTransformations]);

    const handleMouseLeave = useCallback(() => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (!containerRef.current) return;
        const shapes = containerRef.current.querySelectorAll('.shape-item');
        gsap.to(shapes, { duration: MOUSE_EFFECT_CONFIG.leaveDuration, ease: "power3.out", rotateX: 0, rotateY: 0 });
    }, []);

    // components/TalaveraBackground.tsx
// ... (imports and component setup are the same)

// ...

    return (
        <div 
            ref={containerRef} 
            className="relative w-full h-full overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-200"
                style={{
                    display: "grid",
                    gridTemplateRows: `repeat(${grid.rows}, 50px)`,
                    gridTemplateColumns: `repeat(${grid.cols}, 50px)`,
                    perspective: "1000px",
                }}
            >
                {/* --- MODIFY THE MAPPING LOGIC HERE --- */}
                {shapeGrid.map((block, index) => {
                    // If the block is null, it's an empty cell.
                    // Render an empty div to hold the space in the grid.
                    if (!block) {
                        return <div key={`empty-${index}`} />;
                    }

                    // If it's not null, render the shape as before.
                    const row = Math.floor(index / grid.cols);
                    const col = index % grid.cols;
                    return (
                        <div 
                            key={block.id} // Use block.id for non-empty cells
                            className="shape-item flex items-center justify-center"
                            style={{ transformStyle: "preserve-3d" }}
                            data-row={row} 
                            data-col={col}
                        >
                            <Shape
                                shape={block.shape}
                                color={block.color}
                                backFaceColor={block.backFaceColor}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default TalaveraBackground;