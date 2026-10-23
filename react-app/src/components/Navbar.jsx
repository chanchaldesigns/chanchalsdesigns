import React from 'react';
import NavItem from './NavItem';
import { SITE_METADATA } from '../data/portfolioData';

export default function Navbar() {
  return (
    <header
      style={{
        width: '100%',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        mixBlendMode: 'difference',
      }}
    >
      <nav
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavItem title="Home" href="/" />
        <NavItem title="About" href="/#info" />
        <NavItem title="Works" href="/works" />
        <NavItem title="Contact" href={`mailto:${SITE_METADATA.email}`} external />
      </nav>
    </header>
  );
}
