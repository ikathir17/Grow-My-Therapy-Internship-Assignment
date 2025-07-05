import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { 
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.'
  },
  { 
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.'
  },
  { 
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <section
    id="faq"
    style={{
      background: '#fcfcf7',
      padding: '4rem 0 2.5rem 0',
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <style>{`
      @media (max-width: 700px) {
        #faq {
          padding: 2rem 0 1.5rem 0 !important;
        }
        #faq .faq-content {
          padding: 0 1rem !important;
        }
        #faq h2 {
          font-size: 1.4rem !important;
        }
        #faq h3 {
          font-size: 1.1rem !important;
        }
        #faq button {
          font-size: 1rem !important;
          padding: 0.8rem 0 !important;
        }
      }
    `}</style>
    <h2
      style={{
        fontSize: '2.2rem',
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
        color: '#4a6a85',
        marginBottom: '2.5rem',
        fontWeight: 600,
        textAlign: 'center',
        width: '100%',
      }}
    >
      Frequently Asked Questions
    </h2>
    <div className="faq-content" style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} style={{ borderBottom: '1px solid #b7c7d6', marginBottom: 0 }}>
            <div>
              <button
                onClick={() => toggleFAQ(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: '#4a6a85',
                  fontSize: '1.15rem',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  padding: '1.1rem 0',
                  cursor: 'pointer',
                  textAlign: 'left',
                  outline: 'none',
                  transition: 'color 0.2s',
                }}
                aria-expanded={isOpen}
                aria-controls={`faq-${idx}`}
              >
                <span 
                  style={{
                    display: 'inline-block',
                    marginRight: '1rem',
                    fontSize: '1.2rem',
                    color: '#4a6a85',
                    transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                    minWidth: '1rem',
                  }}
                  aria-hidden="true"
                >
                  &#8250;
                </span>
                {faq.question}
              </button>
              <div 
                id={`faq-${idx}`}
                style={{
                  maxHeight: isOpen ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out',
                  padding: isOpen ? '0 2rem 1rem 2rem' : '0 2rem',
                  color: '#555',
                  lineHeight: 1.6,
                }}
                role="region"
                aria-hidden={!isOpen}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  );
};

export default FAQSection;