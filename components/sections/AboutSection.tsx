import React from 'react';

const AboutSection = () => (
  <section
    id="about"
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      background: '#fcfcf7',
      padding: '4rem 0',
      minHeight: '60vh',
      width: '100%',
    }}
  >
    <style>{`
      @media (max-width: 900px) {
        #about {
          flex-direction: column !important;
          padding: 2rem 0 !important;
        }
        #about .about-text {
          margin-left: 5vw !important;
          margin-right: 5vw !important;
          max-width: 100% !important;
        }
        #about .about-img-desktop {
          display: none !important;
        }
        #about .about-img-mobile {
          display: flex !important;
          margin: 2rem auto 1.5rem auto !important;
          width: 90vw !important;
          max-width: 350px !important;
          height: auto !important;
          justify-content: center;
        }
      }
      @media (min-width: 901px) {
        #about .about-img-mobile {
          display: none !important;
        }
      }
    `}</style>
    <div className="about-text" style={{ flex: 1, maxWidth: '700px', marginLeft: '5vw', marginRight: '3vw' }}>
      <h2
        style={{
          fontSize: '2.5rem',
          fontFamily: 'Georgia, Times, "Times New Roman", serif',
          color: '#555',
          marginBottom: '2rem',
          fontWeight: 600,
        }}
      >
        About Dr. Serena Blake
      </h2>
      {/* Mobile image (shows only on mobile) */}
      <div className="about-img-mobile" style={{ display: 'none' }}>
        <img
          src="/assets/Profile.jpg"
          alt="Dr. Serena Blake - Clinical Psychologist"
          style={{
            width: '100%',
            maxWidth: '350px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 32px rgba(0,0,0,0.10)'
          }}
        />
      </div>
      <p style={{ color: '#666', fontSize: '1.15rem', lineHeight: 1.7 }}>
        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
      </p>
    </div>
    {/* Desktop image (shows only on desktop) */}
    <div className="about-img-desktop" style={{ flex: '0 0 400px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginRight: '5vw' }}>
      <img
        src="/assets/Profile.jpg"
        alt="Dr. Serena Blake - Clinical Psychologist"
        style={{
          width: '400px',
          height: '520px',
          objectFit: 'cover',
          borderRadius: '12px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.10)'
        }}
      />
    </div>
  </section>
);

export default AboutSection; 