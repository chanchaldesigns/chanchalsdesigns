import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SmartImage from './SmartImage';

export default function CanvasPhotoCard({ card }) {
  const [hovered, setHovered] = useState(false);

  const spring = {
    bounce: 0.1,
    duration: 0.6,
    type: 'spring',
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: card.width || '244px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          overflow: 'clip',
          position: 'relative',
        }}
      >
        <motion.div
          animate={{
            scale: hovered ? 1.1 : 1,
            filter: hovered ? 'brightness(0.7)' : 'brightness(1)',
          }}
          transition={spring}
          style={{ width: '100%' }}
        >
          <SmartImage
            asset={card.image}
            alt={card.title}
            draggable={false}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          fontFamily: '"Roboto Mono", monospace',
          fontSize: '6px',
          lineHeight: '1.3em',
          color: '#ffffff',
        }}
      >
        {card.title && <p>{card.title}</p>}
        {card.size && <p>{card.size}</p>}
        {card.description && <p>{card.description}</p>}
        {card.year && <p>{card.year}</p>}
      </div>
    </div>
  );
}
