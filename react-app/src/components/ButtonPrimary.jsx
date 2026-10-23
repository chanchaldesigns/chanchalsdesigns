import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ButtonPrimary({
  title = 'Back to home',
  href = '/',
  padding = '12px 24px',
  borderRadius = '2px',
  openInNewTab = false,
}) {
  const [hovered, setHovered] = useState(false);

  const transition = {
    duration: 0.45,
    ease: [0.12, 0.23, 0.43, 1],
    type: 'tween',
  };

  const inner = (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, #ffffff)',
        borderRadius,
        padding,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '22px',
          overflow: 'clip',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <motion.span
          className="preset-20-regular"
          animate={{ y: hovered ? -26 : 0 }}
          transition={transition}
          style={{
            color: 'var(--token-eeb1eb49-7dca-481d-a3c9-3b91b8d5ae2e, #000000)',
            whiteSpace: 'pre',
            display: 'block',
          }}
        >
          {title}
        </motion.span>
        <motion.span
          className="preset-20-regular"
          animate={{ y: hovered ? -22 : 4 }}
          transition={transition}
          style={{
            color: 'var(--token-eeb1eb49-7dca-481d-a3c9-3b91b8d5ae2e, #000000)',
            whiteSpace: 'pre',
            display: 'block',
          }}
        >
          {title}
        </motion.span>
      </div>
    </motion.div>
  );

  if (openInNewTab || href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link to={href}>{inner}</Link>;
}
