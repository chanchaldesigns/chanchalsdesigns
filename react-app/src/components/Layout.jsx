import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NameBanner from './NameBanner';
import Navbar from './Navbar';
import Footer from './Footer';
import LenisSmoothScroll from './LenisSmoothScroll';

export default function Layout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="site-shell">
      <LenisSmoothScroll smooth />

      {isHomePage && <NameBanner text="CHANCHAL" />}

      <div className={isHomePage ? 'navbar-sticky-wrapper' : 'navbar-fixed-wrapper'}>
        <Navbar />
      </div>

      <div
        style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}
