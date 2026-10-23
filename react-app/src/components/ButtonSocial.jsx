import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NorthEastArrow } from './Icons';

export default function ButtonSocial({ title, href }) {
  const [hovered, setHovered] = useState(false);

  const transition = {
    duration: 0.35,
    ease: [0.44, 0, 0.56, 1],
    type: 'tween',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 0 0 0',
        overflow: 'clip',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <span className="preset-16-medium">{title}</span>
        <motion.span
          animate={{ rotate: hovered ? 45 : 0 }}
          transition={transition}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <NorthEastArrow
            size={15}
            color="var(--token-87bc7fa5-4087-4cec-914a-c13c374408c5, #fff2f9)"
          />
        </motion.span>
      </div>
      <div
        style={{
          width: '100%',
          height: '1px',
          position: 'relative',
          overflow: 'clip',
        }}
      >
        <motion.div
          animate={{ left: hovered ? 0 : -80 }}
          transition={transition}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, #ffffff)',
          }}
        />
      </div>
    </a>
  );
}
