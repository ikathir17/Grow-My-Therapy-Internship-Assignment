import React from 'react';

const PoliciesSection = () => {
  return (
    <section id="policies" style={{
      background: '#f9f9f9',
      padding: '4rem 1.5rem',
      width: '100%',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {/* Session Fees & Insurance */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: '#3a6073',
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: '600',
            fontFamily: 'Georgia, serif',
            borderBottom: '2px solid #f0f0f0',
            paddingBottom: '0.75rem'
          }}>
            Session Fees & Insurance
          </h3>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: '0.75rem 0', color: '#555' }}>
              <strong>Individual Session</strong> - $200 (50 minutes)
            </p>
            <p style={{ margin: '0.75rem 0', color: '#555' }}>
              <strong>Couples Session</strong> - $240 (50 minutes)
            </p>
          </div>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            <strong>Insurance:</strong> I am an out-of-network provider. While I don&apos;t accept insurance directly, 
            I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. 
            Please check with your insurance provider about your out-of-network mental health benefits.
          </p>
        </div>

        {/* Office Hours */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: '#3a6073',
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: '600',
            fontFamily: 'Georgia, serif',
            borderBottom: '2px solid #f0f0f0',
            paddingBottom: '0.75rem'
          }}>
            Office Hours
          </h3>
          <div>
            <p style={{ margin: '0.75rem 0', color: '#555' }}>
              <strong>In-person:</strong><br />
              Tuesday & Thursday<br />
              10:00 AM – 6:00 PM
            </p>
            <p style={{ margin: '1.5rem 0 0.75rem', color: '#555' }}>
              <strong>Virtual (Zoom):</strong><br />
              Monday, Wednesday & Friday<br />
              1:00 PM – 5:00 PM
            </p>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: '#3a6073',
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: '600',
            fontFamily: 'Georgia, serif',
            borderBottom: '2px solid #f0f0f0',
            paddingBottom: '0.75rem'
          }}>
            Cancellation Policy
          </h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            I require 24 hours&apos; notice for cancellations. Late cancellations will be charged the full session fee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;
