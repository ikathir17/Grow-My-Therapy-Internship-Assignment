import React from 'react';

const SectionContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
    marginBottom: '2.5rem',
  }}>
    {children}
  </div>
);

export default SectionContainer; 