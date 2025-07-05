import React from 'react';

const ContactSection = () => (
  <section
    id="contact"
    style={{
      background: '#fcfcf7',
      padding: '4rem 0 2.5rem 0',
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {/* Decorative Background Image */}
    <div style={{
      position: 'absolute',
      bottom: '5%',
      right: '5%',
      width: '320px',
      height: '240px',
      backgroundImage: 'url(/assets/extras/ex1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.18,
      zIndex: 0,
      pointerEvents: 'none',
      filter: 'grayscale(80%)',
      transform: 'rotate(5deg)',
      boxShadow: '0 0 30px rgba(0,0,0,0.1)'
    }} />
    <h2
      style={{
        fontSize: '2rem',
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
        color: '#4a6a85',
        marginBottom: '1.5rem',
        fontWeight: 600,
      }}
    >
      Get In Touch
    </h2>
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '0 1.5rem',
      position: 'relative',
      zIndex: 1
    }}>
      <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
        I'm currently accepting new clients for both in-person and telehealth sessions. Please reach out to schedule a free 15-minute phone consultation to see if we're a good fit.
      </p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Contact Information</h3>
        <p style={{ margin: '0.5rem 0' }}>
          <strong>Phone:</strong>{' '}
          <a
            href="tel:+13235550192"
            style={{ color: '#4a6a85', textDecoration: 'none', borderBottom: '1px solid #4a6a85' }}
          >
            (323) 555-0192
          </a>
        </p>
        <p style={{ margin: '0.5rem 0' }}>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:serena@blakepsychology.com"
            style={{ color: '#4a6a85', textDecoration: 'none', borderBottom: '1px solid #4a6a85' }}
          >
            serena@blakepsychology.com
          </a>
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Office Location</h3>
        <p style={{ margin: '0.5rem 0' }}>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#4a6a85', textDecoration: 'none', borderBottom: '1px solid #4a6a85' }}
          >
            1287 Maplewood Drive<br />
            Los Angeles, CA 90026
          </a>
        </p>
        <p style={{ fontStyle: 'italic', margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
          Free street parking available.
        </p>
      </div>

      <div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Office Hours</h3>
        <p style={{ margin: '0.3rem 0' }}><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</p>
        <p style={{ margin: '0.3rem 0' }}><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
      </div>
    </div>
    <div style={{ 
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid #e0e0e0',
      width: '100%',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <a 
          href="#hero" 
          style={{ 
            color: '#4a6a85', 
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#2c4a6b'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a6a85'}
        >
          Home
        </a>
        <a 
          href="#" 
          style={{ 
            color: '#4a6a85', 
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#2c4a6b'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a6a85'}
        >
          Privacy Policy
        </a>
        <a 
          href="#" 
          style={{ 
            color: '#4a6a85', 
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#2c4a6b'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a6a85'}
        >
          Good Faith Estimate
        </a>
        <a 
          href="#" 
          style={{ 
            color: '#4a6a85', 
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#2c4a6b'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a6a85'}
        >
          Client Portal
        </a>
      </div>
      <div style={{ 
        color: '#888',
        fontSize: '0.9rem',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #f0f0f0'
      }}>
        &copy; {new Date().getFullYear()} Dr. Serena Blake, Ph.D. All rights reserved.
      </div>
    </div>
  </section>
);

export default ContactSection; 