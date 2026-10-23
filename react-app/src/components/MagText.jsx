import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MagText({
  text = 'More projects coming soon!',
  textColor = '#DECED6',
  minWeight = 400,
  maxWeight = 900,
  maxScale = 1.6,
  spread = 3,
  fontSize = '88px',
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const characters = text.split('');

  return (
    <div
      onMouseLeave={() => setHoveredIndex(null)}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'default',
        userSelect: 'none',
        fontFamily: '"Roboto Condensed", sans-serif',
        fontSize,
        lineHeight: 1.1,
      }}
    >
      {characters.map((char, index) => {
        let factor = 0;
        if (hoveredIndex !== null) {
          const distance = Math.abs(hoveredIndex - index);
          if (distance <= spread) {
            factor = Math.cos((distance / (spread + 1)) * (Math.PI / 2));
          }
        }
        const scale = 1 + (maxScale - 1) * factor;
        const weight = Math.round(minWeight + (maxWeight - minWeight) * factor);

        return (
          <motion.span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{
              scaleY: scale,
              scaleX: 1 + (scale - 1) * 0.3,
              fontWeight: weight,
              color: textColor,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 22,
              mass: 0.5,
            }}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              originY: 0.7,
              padding: '0 0.5px',
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
