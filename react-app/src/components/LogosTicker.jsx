import React from 'react';
import { motion } from 'framer-motion';
import SmartImage from './SmartImage';
import { BRAND_LOGOS } from '../data/portfolioData';

export default function LogosTicker() {
  const repeatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section
      style={{
        width: '100%',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '40px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '90px',
            width: 'max-content',
          }}
        >
          {repeatedLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              style={{
                width: `${logo.width}px`,
                height: `${logo.height}px`,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SmartImage
                asset={logo.asset}
                alt={logo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
