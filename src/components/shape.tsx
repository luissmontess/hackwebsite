const Shape = ({ shape, color, className = "", style = {}, }: { shape: string; color: string; className?: string, style?: React.CSSProperties; }) => {
    const size = "80%"; // Full size of grid cell
    const borderRadius = "10%"
    switch (shape) {
        case "circle":
            return (
                <div 
                className={`rounded-full ${className}`} 
                style={{ 
                    backgroundColor: color, 
                    width: size, 
                    height: size,
                    aspectRatio: "1",
                }} 
                />
            );
        case "square":
            return (
                <div 
                className={className}
                style={{ 
                    backgroundColor: color,
                    width: size, 
                    height: size,
                    borderRadius,
                    ...style,
                    aspectRatio: "1",
                }} 
                />
            );
        case "rhombus":
            return (
                <div
                className={className}
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                    transform: "rotate(45deg)",
                    borderRadius,
                    ...style,
                    aspectRatio: "1",
                }}
                />
            );
        case "triangle":
            const numericSize = 42; // Convert "80%" to number for calculation
            return (
                <div
                    className={className}
                    style={{
                        width: "0",
                        height: "0",
                        borderLeft: `${numericSize / 2}px solid transparent`,
                        borderRight: `${numericSize / 2}px solid transparent`,
                        borderBottom: `${numericSize}px solid ${color}`,
                        ...style,
                        aspectRatio: "1",
                    }}
                />
            );
        default:
            return null;
    }
};

export default Shape

