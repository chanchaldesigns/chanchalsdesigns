import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from '../components/SmartImage';
import DeliverablesItem from '../components/DeliverablesItem';
import Tag from '../components/Tag';
import ButtonPrimary from '../components/ButtonPrimary';
import NextWorkCard from '../components/NextWorkCard';
import { WORKS_DATA } from '../data/portfolioData';

export default function WorkDetail() {
  const { slug } = useParams();
  const work = WORKS_DATA.find((item) => item.slug === slug);

  useEffect(() => {
    if (work) {
      document.title = `${work.title} — Chanchal's Design Portfolio`;
    }
  }, [work]);

  if (!work) {
    return <Navigate to="/404" replace />;
  }

  const nextWork = WORKS_DATA.find((item) => item.slug === work.nextWorkSlug) || WORKS_DATA[0];
  const { image2, image3, image4, image5, image6, image7 } = work.images || {};

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
      {/* 1. Hero Section */}
      <motion.div
        initial={{ opacity: 0.001, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ damping: 30, delay: 0.2, mass: 0.1, stiffness: 130, type: 'spring' }}
        style={{
          width: '100%',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <div className="two-col-section">
          <div className="col-half hide-on-mobile" />
          <div className="col-half">
            <h1 className="preset-88-h1">{work.title}</h1>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            height: '860px',
            borderRadius: '2px',
            overflow: 'clip',
          }}
        >
          <SmartImage
            asset={work.thumbnail}
            alt={work.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </motion.div>

      {/* 2. Project Info Section */}
      <section
        style={{
          width: '100%',
          padding: '60px 20px 100px 20px',
        }}
      >
        <div className="two-col-section">
          <div className="col-half">
            <h2 className="preset-16-medium">Intro</h2>
          </div>

          <div
            className="col-half"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '40px',
              maxWidth: '700px',
            }}
          >
            {work.description && (
              <p className="preset-20-regular" style={{ whiteSpace: 'pre-wrap' }}>
                {work.description}
              </p>
            )}

            {work.deliverables && work.deliverables.length > 0 && (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <h2
                  className="preset-16-medium"
                  style={{ color: 'var(--text-muted-white)' }}
                >
                  Deliverables:
                </h2>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {work.deliverables.map((deliv) => (
                    <DeliverablesItem key={deliv} title={deliv} variant="small" />
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Tag title="Year" info={work.year} />
              <Tag title="Client" info={work.client} />
              {work.websiteUrl && (
                <ButtonPrimary
                  title="Visit Website"
                  href={work.websiteUrl}
                  padding="8px 16px"
                  borderRadius="3px"
                  openInNewTab
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Case Study Gallery Images */}
      <section
        style={{
          width: '100%',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {(image2 || image3) && (
          <div className="two-col-section">
            {image2 && (
              <div
                className="col-half"
                style={{ aspectRatio: '1.4214 / 1', borderRadius: '2px', overflow: 'clip' }}
              >
                <SmartImage
                  asset={image2}
                  alt={`${work.title} 2`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}
            {image3 && (
              <div
                className="col-half"
                style={{ aspectRatio: '1.4214 / 1', borderRadius: '2px', overflow: 'clip' }}
              >
                <SmartImage
                  asset={image3}
                  alt={`${work.title} 3`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}
          </div>
        )}

        {image4 && (
          <div
            style={{
              width: '100%',
              aspectRatio: '1.477 / 1',
              borderRadius: '2px',
              overflow: 'clip',
            }}
          >
            <SmartImage
              asset={image4}
              alt={`${work.title} 4`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        {(image5 || image6) && (
          <div className="two-col-section">
            {image5 && (
              <div
                className="col-half"
                style={{ aspectRatio: '1.333 / 1', borderRadius: '2px', overflow: 'clip' }}
              >
                <SmartImage
                  asset={image5}
                  alt={`${work.title} 5`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}
            {image6 && (
              <div
                className="col-half"
                style={{ aspectRatio: '1.333 / 1', borderRadius: '2px', overflow: 'clip' }}
              >
                <SmartImage
                  asset={image6}
                  alt={`${work.title} 6`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}
          </div>
        )}

        {image7 && (
          <div
            style={{
              width: '100%',
              aspectRatio: '1.477 / 1',
              borderRadius: '2px',
              overflow: 'clip',
            }}
          >
            <SmartImage
              asset={image7}
              alt={`${work.title} 7`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
      </section>

      {/* 4. Next Work Section */}
      {nextWork && (
        <section
          style={{
            width: '100%',
            padding: '100px 20px',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: '100px',
          }}
        >
          <div className="two-col-section">
            <div className="col-half">
              <p className="preset-16-medium">Next work</p>
            </div>
            <div
              className="col-half"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              <h2 className="preset-40-uppercase">{nextWork.title}</h2>
              <NextWorkCard work={nextWork} buttonTitle="View project" />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
