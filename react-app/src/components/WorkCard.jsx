import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from './SmartImage';
import WorkCardTag from './WorkCardTag';

export default function WorkCard({ work }) {
  const [hovered, setHovered] = useState(false);

  const transition = {
    duration: 0.7,
    ease: [0.12, 0.23, 0.5, 1],
    type: 'tween',
  };

  return (
    <Link
      to={`/works/${work.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
        width: '100%',
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
        }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={transition}
          style={{
            width: '100%',
            height: '100%',
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
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <h3 className="preset-20-regular">{work.client || work.title}</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <WorkCardTag title={work.category} />
          <WorkCardTag title={work.year} />
        </div>
      </div>
    </Link>
  );
}
