import React from 'react';

export default function NumbersCard({ number, label }) {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border-medium)',
        padding: '8px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
        width: '100%',
      }}
    >
      <p className="preset-88-accent">{number}</p>
      <p className="preset-16-medium">{label}</p>
    </div>
  );
}
