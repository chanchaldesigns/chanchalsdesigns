import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from '../components/ButtonPrimary';
import CTA from '../components/CTA';

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Chanchal's Design Portfolio";
  }, []);

  return (
    <main
      style={{
        width: '100%',
        maxWidth: '1920px',
        backgroundColor: 'var(--bg-black)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <section
        style={{
          width: '100%',
          height: '800px',
          padding: '100px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="two-col-section" style={{ alignItems: 'center' }}>
          <div className="col-half hide-on-mobile" />
          <motion.div
            className="col-half"
            initial={{ opacity: 0.001, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ damping: 30, delay: 0.2, mass: 0.1, stiffness: 130, type: 'spring' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '40px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h1 className="preset-88-h1">404</h1>
              <p
                className="preset-20-regular"
                style={{
                  maxWidth: '450px',
                  color: 'var(--text-muted-white)',
                }}
              >
                Ooops! Looks like the page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
            </div>
            <ButtonPrimary title="Back to home" href="/" />
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
