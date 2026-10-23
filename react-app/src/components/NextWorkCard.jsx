import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from './SmartImage';

export default function NextWorkCard({ work, buttonTitle = 'View project' }) {
  const [hovered, setHovered] = useState(false);

  const transition = {
    duration: 0.7,
    ease: [0.12, 0.23, 0.5, 1],
    type: 'tween',
  };

  if (!work) return null;

  return (
    <Link
      to={`/works/${work.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '570px',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '1.347619 / 1',
          borderRadius: '2px',
          overflow: 'clip',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={transition}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <SmartImage
            asset={work.thumbnail}
            alt={work.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={transition}
          style={{
            position: 'relative',
            zIndex: 8,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '4px',
            padding: '6px 16px',
          }}
        >
          <span className="preset-16-medium">{buttonTitle}</span>
        </motion.div>
      </div>
    </Link>
  );
}
