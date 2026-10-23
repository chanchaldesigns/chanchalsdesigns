import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import WorkCard from '../components/WorkCard';
import MagText from '../components/MagText';
import CTA from '../components/CTA';
import { WORKS_DATA } from '../data/portfolioData';

export default function Works() {
  useEffect(() => {
    document.title = "Works — Chanchal's Design Portfolio";
  }, []);

  return (
    <main
      style={{
        width: '100%',
        maxWidth: '1920px',
        backgroundColor: 'var(--bg-black)',
        paddingTop: '140px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <section
        style={{
          width: '100%',
          padding: '0 20px 100px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <motion.div
          className="two-col-section"
          initial={{ opacity: 0.001, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ damping: 30, delay: 0.2, mass: 0.1, stiffness: 130, type: 'spring' }}
        >
          <div className="col-half hide-on-mobile" />
          <div className="col-half">
            <h1 className="preset-88-h1">Featured works</h1>
          </div>
        </motion.div>

        <motion.div
          className="works-grid"
          initial={{ opacity: 0.001, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ damping: 30, delay: 0.35, mass: 0.1, stiffness: 130, type: 'spring' }}
        >
          {WORKS_DATA.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </motion.div>
      </section>

      <div
        className="hide-on-mobile"
        style={{
          width: '100%',
          padding: '60px 20px 100px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MagText
          text="More projects coming soon!"
          textColor="#DECED6"
          minWeight={400}
          maxWeight={900}
          maxScale={1.6}
          spread={3}
          fontSize="88px"
        />
      </div>

      <CTA />
    </main>
  );
}
