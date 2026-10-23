import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavItem({ title, href, external = false }) {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  const transition = {
    duration: 0.45,
    ease: [0.12, 0.23, 0.43, 1],
    type: 'tween',
  };

  const handleAnchorClick = (e) => {
    if (href.startsWith('/#')) {
      const hash = href.slice(1);
      if (location.pathname === '/') {
        e.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const content = (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: '16px',
        overflow: 'clip',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
      }}
    >
      <motion.span
        className="preset-16-medium"
        animate={{ y: hovered ? -18 : 0 }}
        transition={transition}
        style={{
          color: 'var(--token-77aa775b-c339-4a9c-b935-085bea04a229, #ffe6f2)',
          whiteSpace: 'pre',
          display: 'block',
        }}
      >
        {title}
      </motion.span>
      <motion.span
        className="preset-16-medium"
        animate={{ y: hovered ? -16 : 4 }}
        transition={transition}
        style={{
          color: 'var(--token-77aa775b-c339-4a9c-b935-085bea04a229, #ffe6f2)',
          whiteSpace: 'pre',
          display: 'block',
        }}
      >
        {title}
      </motion.span>
    </motion.div>
  );

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} onClick={handleAnchorClick}>
      {content}
    </Link>
  );
}
