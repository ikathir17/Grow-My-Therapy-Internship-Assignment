import React from 'react';

const RatesSection = () => (
  <>
    {/* Session Fees & Insurance Section */}
    <section
      id="rates"
      style={{
        background: '#d8e2e8',
        padding: '4rem 0',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <div style={{ 
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        padding: '0 2rem',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2rem',
          marginBottom: '2.5rem',
          fontFamily: 'Georgia, serif',
          fontWeight: 'normal'
        }}>
          Session Fees & Insurance
        </h1>
        
        <h2 style={{
          color: '#2c3e50',
          fontSize: '1.3rem',
          margin: '2rem 0 1rem',
          fontWeight: '500'
        }}>
          Session Fees:
        </h2>
        <p style={{ margin: '0.5rem 0', lineHeight: '1.6', color: '#333' }}>
          1. $200 / individual session
        </p>
        <p style={{ margin: '0.5rem 0 2rem', lineHeight: '1.6', color: '#333' }}>
          2. $240 / couples session
        </p>
        
        <h2 style={{
          color: '#2c3e50',
          fontSize: '1.3rem',
          margin: '2rem 0 1rem',
          fontWeight: '500'
        }}>
          Insurance Information
        </h2>
        <p style={{ 
          margin: '0 auto', 
          lineHeight: '1.6',
          color: '#333',
          maxWidth: '600px'
        }}>
          I am an out-of-network provider. While I don&apos;t accept insurance directly, 
          I can provide you with a superbill that you can submit to your insurance 
          company for potential reimbursement.
        </p>
      </div>
    </section>

    {/* New Client Availability Section */}
    <section style={{
      background: '#f8f5f0',
      padding: '4rem 1.5rem',
      width: '100%',
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: '1.3rem',
        lineHeight: '1.8',
        color: '#2c4a5c',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem',
        fontFamily: 'Georgia, serif',
        fontWeight: 500
      }}>
        Currently accepting new clients. Please contact to schedule a consultation.
      </p>
    </section>

    {/* Quote Section */}
    <section style={{
      backgroundImage: 'url(/assets/quote.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '6rem 1.5rem',
      width: '100%',
      position: 'relative',
      color: 'white',
      textShadow: '0 1px 3px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1
      }}></div>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ 
          padding: '3rem 2rem',
          textAlign: 'center',
          fontStyle: 'italic',
          fontSize: '1.6rem',
          lineHeight: '1.6',
          fontWeight: '300',
          letterSpacing: '0.5px'
        }}>
          <p style={{ 
            margin: '0 0 1.5rem 0',
            position: 'relative',
            fontFamily: 'Georgia, serif'
          }}>
            &ldquo;I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.&rdquo;
          </p>
          <p style={{
            fontSize: '1.2rem',
            fontStyle: 'normal',
            fontWeight: '500',
            margin: '2rem 0 0 0',
            opacity: 0.9,
            letterSpacing: '1px'
          }}>
            —Audre Lorde
          </p>
        </div>
      </div>
    </section>
  </>
);

export default RatesSection;