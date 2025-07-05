import React from 'react';
import SectionContainer from '@/components/sections/SectionContainer';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      "Specialized in helping individuals manage anxiety and stress through evidence-based techniques. Whether you're dealing with generalized anxiety, panic attacks, or work-related stress, we'll develop personalized strategies to help you regain control and find balance in your daily life.",
    image: '/assets/Services/service1.jpg',
  },
  {
    title: 'Relationship Counseling',
    description:
      "Improve communication, resolve conflicts, and strengthen your connections. Whether you're navigating dating, marriage, family dynamics, or friendships, I provide a supportive space to explore relationship patterns and develop healthier ways of connecting with others.",
    image: '/assets/Services/service2.jpg',
  },
  {
    title: 'Trauma Recovery',
    description:
      "Healing from past trauma in a safe, supportive environment. Using trauma-informed approaches, I help clients process difficult experiences, reduce distressing symptoms, and rebuild a sense of safety and empowerment in their lives.",
    image: '/assets/Services/service3.jpg',
  },
];

const ServicesSection = () => (
  <section
    id="services"
    style={{
      background: '#fcfcf7',
      padding: '4rem 0 2rem 0',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {/* Decorative Background Image */}
    <div style={{
      position: 'absolute',
      bottom: '5%',
      left: '5%',
      width: '350px',
      height: '250px',
      backgroundImage: 'url(/assets/extras/ex2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.2,
      zIndex: 0,
      pointerEvents: 'none',
      filter: 'grayscale(80%)',
      transform: 'rotate(-5deg)',
      boxShadow: '0 0 30px rgba(0,0,0,0.1)'
    }} />
    <h2
      style={{
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '2.2rem',
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
        color: '#444',
        fontWeight: 600,
      }}
    >
      Specialties & Services
    </h2>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '3rem',
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}
    >
      {services.map((service, idx) => (
        <div
          key={idx}
          style={{
            flex: '1 1 340px',
            maxWidth: '420px',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'none',
            padding: '0 1rem',
          }}
        >
          <div
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 2rem auto',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              background: '#f5f5f5',
              border: '8px solid #fff',
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.5s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              loading="lazy"
            />
          </div>
          <h3
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontSize: '1.25rem',
              color: '#222',
              marginBottom: '1.2rem',
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              color: '#444',
              fontSize: '1.05rem',
              textAlign: 'center',
              lineHeight: 1.7,
              marginBottom: 0,
            }}
          >
            {service.description}
          </p>
        </div>
      ))}
    </div>
    <style>{`
      @media (max-width: 1100px) {
        #services .service-card {
          max-width: 90vw !important;
        }
        #services img {
          width: 100% !important;
          height: 100% !important;
        }
      }
      @media (max-width: 768px) {
        #services {
          padding: 2.5rem 0 !important;
        }
        #services > div > div {
          padding: 0 1.5rem;
        }
      }
      @media (max-width: 480px) {
        #services > div > div {
          padding: 0 1rem;
        }
      }
    `}</style>
  </section>
);

export default ServicesSection; 