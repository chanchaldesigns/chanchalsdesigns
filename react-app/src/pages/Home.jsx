import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import WorkCard from '../components/WorkCard';
import LogosTicker from '../components/LogosTicker';
import SmartImage from '../components/SmartImage';
import NumbersCard from '../components/NumbersCard';
import DeliverablesItem from '../components/DeliverablesItem';
import InfoListItem from '../components/InfoListItem';
import InfiniteCanvas from '../components/InfiniteCanvas';
import CTA from '../components/CTA';
import {
  HERO_CONTENT,
  WORKS_DATA,
  ABOUT_CONTENT,
  NUMBERS_DATA,
  SERVICES_DATA,
  WORK_EXPERIENCE_DATA,
} from '../data/portfolioData';

export default function Home() {
  useEffect(() => {
    document.title = "Chanchal's Design Portfolio";
  }, []);

  const enterTransition = {
    damping: 30,
    delay: 0.15,
    mass: 0.1,
    stiffness: 130,
    type: 'spring',
  };

  return (
    <main
      style={{
        width: '100%',
        maxWidth: '1920px',
        backgroundColor: 'var(--bg-home)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* 1. Hero Section */}
      <section
        style={{
          width: '100%',
          padding: '182px 20px 91px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="two-col-section">
          <div className="col-half hide-on-mobile" />
          <motion.div
            className="col-half"
            initial={{ opacity: 0.001, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition}
          >
            <p
              className="preset-20-regular"
              style={{
                maxWidth: '560px',
                color: 'var(--text-white)',
              }}
            >
              {HERO_CONTENT.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Works Grid */}
      <motion.section
        initial={{ opacity: 0.001, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...enterTransition, delay: 0.25 }}
        style={{
          width: '100%',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '80px',
        }}
      >
        <div className="works-grid">
          {WORKS_DATA.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </motion.section>

      {/* 3. Brand Logos Marquee Ticker */}
      <LogosTicker />

      {/* 4. About Section (#info) */}
      <section
        id="info"
        style={{
          width: '100%',
          padding: '100px 20px 0 20px',
        }}
      >
        <div className="two-col-section">
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
            <div style={{ position: 'relative', maxWidth: '740px', width: '100%' }}>
              <h2
                className="preset-16-medium"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  color: 'var(--text-pink-light)',
                }}
              >
                {ABOUT_CONTENT.label}
              </h2>
              <div style={{ maxWidth: '730px' }}>
                <p className="preset-20-regular" style={{ whiteSpace: 'pre-wrap' }}>
                  {ABOUT_CONTENT.paragraphs[0]}
                </p>
                <br />
                <p className="preset-20-regular">{ABOUT_CONTENT.paragraphs[1]}</p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                gap: '20px',
                width: '100%',
                maxWidth: '850px',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ damping: 30, mass: 0.1, stiffness: 130, type: 'spring' }}
                style={{
                  flex: 1,
                  aspectRatio: '0.8112 / 1',
                  borderRadius: '2px',
                  overflow: 'clip',
                }}
              >
                <SmartImage
                  asset={ABOUT_CONTENT.portraits[0]}
                  alt="Chanchal Portrait 1"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              <motion.div
                className="hide-on-mobile"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ damping: 30, delay: 0.1, mass: 0.1, stiffness: 130, type: 'spring' }}
                style={{
                  flex: 1,
                  aspectRatio: '1.335 / 1',
                  borderRadius: '2px',
                  overflow: 'clip',
                }}
              >
                <SmartImage
                  asset={ABOUT_CONTENT.portraits[1]}
                  alt="Chanchal Portrait 2"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Numbers Section (50+ Projects, 5+ Years experience) */}
      <section
        className="hide-on-mobile"
        style={{
          width: '100%',
          padding: '100px 20px 0 20px',
        }}
      >
        <div className="two-col-section">
          <div className="col-half" />
          <div
            className="col-half"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
            }}
          >
            {NUMBERS_DATA.map((item) => (
              <div key={item.id} style={{ flex: 1 }}>
                <NumbersCard number={item.number} label={item.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Services ("What I do") Section */}
      <section
        style={{
          width: '100%',
          padding: '100px 20px 0 20px',
        }}
      >
        <div
          className="two-col-section"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '20px',
          }}
        >
          <div className="col-half">
            <h2 className="preset-16-medium" style={{ color: 'var(--text-white)' }}>
              What I do
            </h2>
          </div>
          <div
            className="col-half"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {SERVICES_DATA.map((service) => (
              <DeliverablesItem key={service.id} title={service.title} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Work Experience Section */}
      <section
        className="hide-on-mobile"
        style={{
          width: '100%',
          padding: '83px 20px',
        }}
      >
        <div
          className="two-col-section"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '76px 0 75px 0',
          }}
        >
          <div className="col-half">
            <h2 className="preset-16-medium" style={{ color: 'var(--text-white)' }}>
              Work experience
            </h2>
          </div>
          <div
            className="col-half"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {WORK_EXPERIENCE_DATA.map((exp) => (
              <InfoListItem
                key={exp.id}
                role={exp.role}
                company={exp.company}
                period={exp.period}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Interactive 2D Infinite Draggable Photo Canvas */}
      <InfiniteCanvas />

      {/* 9. Call To Action */}
      <CTA />
    </main>
  );
}
