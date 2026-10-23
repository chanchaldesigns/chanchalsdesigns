import React from 'react';

export default function InfoListItem({ role, company, period }) {
  return (
    <div
      style={{
        width: '100%',
        borderBottom: '1px solid var(--border-medium)',
        padding: '0 0 8px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '16px',
      }}
    >
      <div style={{ flex: 1 }}>
        <p className="preset-20-regular">{role}</p>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <p className="preset-20-regular">{company}</p>
      </div>
      <div style={{ flex: 1, textAlign: 'right' }}>
        <p className="preset-20-regular">{period}</p>
      </div>
    </div>
  );
}
