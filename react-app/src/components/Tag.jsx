import React from 'react';

export default function Tag({ title, info }) {
  if (!info) return null;
  return (
    <div
      style={{
        backgroundColor: 'var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, #ffffff)',
        borderRadius: '3px',
        padding: '8px 16px',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        userSelect: 'none',
      }}
    >
      <span className="preset-16-medium" style={{ color: '#000000' }}>
        {title}
      </span>
      <span className="preset-16-medium" style={{ color: '#000000' }}>
        /
      </span>
      <span className="preset-16-medium" style={{ color: '#000000' }}>
        {info}
      </span>
    </div>
  );
}
