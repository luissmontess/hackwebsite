// components/Shape.tsx

import React from 'react';

const Shape = ({
  shape,
  color,
  backFaceColor, // This prop is now required
}: {
  shape: string;
  color: string;
  backFaceColor: string;
}) => {
  const depth = 6;
  const size = '70%';
  const borderRadius = '10%';

  const sharedWrapperStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
  };

  switch (shape) {
    case 'square':
    case 'rhombus':
      const frontBackStyle: React.CSSProperties = {
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        borderRadius,
      };

      return (
        <div
            style={{
                ...sharedWrapperStyle,
                transform: shape === 'rhombus' ? 'rotate(45deg)' : 'none',
            }}
        >
          {/* Back Face */}
          <div
            style={{
              ...frontBackStyle,
              background: backFaceColor, // Uses the prop
              transform: `translateZ(-${depth}px)`,
            }}
          />
          {/* Front Face */}
          <div
            style={{
              ...frontBackStyle,
              background: color,
              boxShadow: 'inset 0px 0px 10px rgba(255, 255, 255, 0.2), 0 5px 15px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      );

    case 'circle':
      const shadows = Array.from({ length: depth })
        .map((_, i) => `0px ${i + 1}px 0 ${backFaceColor}`) // Uses the prop
        .join(', ');

      return (
        <div style={sharedWrapperStyle}>
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: '50%',
              boxShadow: shadows,
            }}
          />
        </div>
      );

    case 'triangle':
        const numericSize = 42;
        const dropShadows = Array.from({ length: depth })
            .map((_, i) => `drop-shadow(0px ${i+1}px 0px ${backFaceColor})`) // Uses the prop
            .join(' ');

      return (
        <div style={sharedWrapperStyle}>
          <div
            style={{
              width: "0",
              height: "0",
              borderLeft: `${numericSize / 2}px solid transparent`,
              borderRight: `${numericSize / 2}px solid transparent`,
              borderBottom: `${numericSize}px solid ${color}`,
              filter: dropShadows,
            }}
          />
        </div>
      );

    default:
      return null;
  }
};

export default Shape;