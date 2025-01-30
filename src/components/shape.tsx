const Shape = ({
    shape,
    color,
    className = "",
    style = {},
  }: {
    shape: string;
    color: string;
    className?: string;
    style?: React.CSSProperties;
  }) => {
    const size = "80%"; 
    const borderRadius = "10%";
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
              ...style,
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
              aspectRatio: "1",
              ...style,
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
              aspectRatio: "1",
              ...style,
            }}
          />
        );
      case "triangle":
        const numericSize = 42; 
        return (
          <div
            className={className}
            style={{
              width: "0",
              height: "0",
              borderLeft: `${numericSize / 2}px solid transparent`,
              borderRight: `${numericSize / 2}px solid transparent`,
              borderBottom: `${numericSize}px solid ${color}`,
              aspectRatio: "1",
              ...style,
            }}
          />
        );
      default:
        return null;
    }
  };
  
  export default Shape;
  