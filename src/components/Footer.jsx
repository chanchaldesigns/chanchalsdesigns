import React from 'react';
import ButtonSocial from './ButtonSocial';
import NameBanner from './NameBanner';
import { SITE_METADATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        maxWidth: '1920px',
        backgroundColor: 'var(--bg-black)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '20px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '100px',
        overflow: 'clip',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {SITE_METADATA.socialLinks.map((social) => (
            <ButtonSocial key={social.title} title={social.title} href={social.href} />
          ))}
        </div>
      </div>

      <NameBanner text="CHANCHAL" />
    </footer>
  );
}
