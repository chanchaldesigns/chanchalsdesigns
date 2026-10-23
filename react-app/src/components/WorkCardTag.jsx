import React from 'react';

export default function WorkCardTag({ title }) {
  if (!title) return null;
  return (
    <div
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        padding: '6px 16px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span className="preset-16-medium" style={{ whiteSpace: 'pre' }}>
        {title}
      </span>
    </div>
  );
}
