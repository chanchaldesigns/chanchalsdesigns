import React from 'react';

export default function DeliverablesItem({ title, variant = 'default' }) {
  const isSmall = variant === 'small';
  return (
    <div
      style={{
        width: '100%',
        borderBottom: '1px solid var(--border-medium)',
        padding: isSmall ? '0 0 4px 0' : '8px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {isSmall ? (
        <h3 className="preset-20-regular">{title}</h3>
      ) : (
        <h3 className="preset-40-uppercase">{title}</h3>
      )}
    </div>
  );
}
