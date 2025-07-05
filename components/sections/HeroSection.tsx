import React from 'react';

const HeroSection = () => (
  <section
    id="hero"
    style={{
      position: 'relative',
      width: '100%',
      minHeight: '80vh',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#222',
    }}
  >
    {/* Background image */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 10,
      overflow: 'hidden',
      backgroundColor: '#f8f9fa' /* Fallback color */
    }}>
      <img
        src="/assets/hero.jpg"
        alt="Dr. Serena Blake, Clinical Psychologist"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.92)',
          transform: 'scale(1.05)'
        }}
        loading="eager"
      />
      {/* Subtle overlay for text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.15)',
        zIndex: 15
      }}></div>
    </div>
    
    {/* Content */}
    <div style={{
      position: 'relative',
      zIndex: 30,
      textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      color: '#fff',
      padding: '0 1.5rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        letterSpacing: '-0.5px',
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
        fontWeight: 700,
        marginBottom: '1.5rem',
        lineHeight: 1.1,
        textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
      }}>
        Dr. Serena Blake, PsyD <span style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginLeft: '0.5rem',
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
        }}>Clinical Psychologist</span>
      </h1>
      <h2 style={{
        fontSize: '1.6rem',
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
        fontWeight: 400,
        marginBottom: '2rem',
        lineHeight: 1.4,
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
      }}>
        <span style={{ fontStyle: 'italic' }}>Healing, Connection, and Renewal</span>
      </h2>
      
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto 1.5rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }}>
          Providing compassionate, evidence-based therapy to help you navigate life's challenges and achieve meaningful change.
        </p>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        <a
          href="#contact"
          style={{
            display: 'inline-block',
            backgroundColor: '#3a6073',
            color: 'white',
            fontWeight: 500,
            padding: '0.9rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#2c4a5c';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#3a6073';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
        >
          Start Healing Today
        </a>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '1rem',
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.9)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg style={{ width: '1.1rem', height: '1.1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            8 years of practice
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg style={{ width: '1.1rem', height: '1.1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            500+ sessions
          </div>
        </div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div style={{
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 30,
      animation: 'bounce 2s infinite'
    }}>
      <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
    
    <style jsx global>{`
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0) translateX(-50%);
        }
        40% {
          transform: translateY(-20px) translateX(-50%);
        }
        60% {
          transform: translateY(-10px) translateX(-50%);
        }
      }
    `}</style>
  </section>
);

export default HeroSection;