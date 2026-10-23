import React, { useEffect, useRef, useState } from 'react';

export default function NameBanner({ text = 'CHANCHAL' }) {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [fontSize, setFontSize] = useState(240);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current || !measureRef.current) return;
      const availableWidth = containerRef.current.clientWidth - 16;
      const naturalWidth = measureRef.current.scrollWidth;
      if (naturalWidth > 0 && availableWidth > 0) {
        const ratio = availableWidth / naturalWidth;
        setFontSize(Math.max(48, Math.floor(100 * ratio)));
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', updateSize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '1920px',
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'clip',
        userSelect: 'none',
        position: 'relative',
      }}
    >
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          whiteSpace: 'pre',
          fontFamily: '"Roboto Condensed", sans-serif',
          fontWeight: 600,
          fontSize: '100px',
          letterSpacing: '-0.05em',
          lineHeight: '0.8em',
        }}
      >
        {text}
      </span>

      <p
        style={{
          fontFamily: '"Roboto Condensed", sans-serif',
          fontWeight: 600,
          fontSize: `${fontSize}px`,
          letterSpacing: '-0.05em',
          lineHeight: '0.8em',
          color: 'var(--token-87bc7fa5-4087-4cec-914a-c13c374408c5, #fff2f9)',
          whiteSpace: 'nowrap',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {text}
      </p>
    </div>
  );
}
