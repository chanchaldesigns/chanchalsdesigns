import React from 'react';
import CopyEmailButton from './CopyEmailButton';

export default function CTA() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: 'var(--bg-black)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '112px 20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="two-col-section" style={{ alignItems: 'center' }}>
        <div className="col-half hide-on-mobile" />
        <div
          className="col-half"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '40px',
          }}
        >
          <h2
            className="preset-40-uppercase"
            style={{
              maxWidth: '550px',
              color: 'var(--text-pink-light)',
            }}
          >
            Liked my work? Let&apos;s talk and create something together!
          </h2>
          <CopyEmailButton />
        </div>
      </div>
    </section>
  );
}
