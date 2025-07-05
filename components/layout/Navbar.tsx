import React, { useState, useEffect, CSSProperties } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

// Extend CSSProperties to include CSS custom properties
interface CustomCSSProperties extends CSSProperties {
  '--nav-underline-width'?: string;
  '--nav-bg-color'?: string;
  '--nav-border-color'?: string;
}

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const headerOffset = 80; // Height of your fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close the mobile menu
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };
  

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav 
        style={{
          width: '100%',
          padding: '0.5rem 1.5rem',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 1000,
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
          borderBottom: '1px solid rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ 
          width: '100%',
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex', 
          alignItems: 'center',
          fontFamily: "'Playfair Display', serif"
        }}>
          <a href="#hero" style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center',
            flex: '1 0 auto',
            maxWidth: 'fit-content'
          }}>
            <img 
              src="/assets/logo.png" 
              alt="Dr. Serena Blake - Clinical Psychologist" 
              style={{
                height: '45px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </a>
          
          {/* Spacer to push desktop nav to the right */}
          <div style={{ flex: 1 }}></div>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ 
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
            marginRight: '1rem'
          } as CustomCSSProperties}>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                style={{ 
                  textDecoration: 'none', 
                  color: '#333',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  letterSpacing: '0.3px',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.2s ease-in-out',
                  fontFamily: "'Playfair Display', serif"
                }}
                className="nav-link"
                onMouseOver={(e) => e.currentTarget.style.color = '#2c4a5c'}
                onMouseOut={(e) => e.currentTarget.style.color = '#3a4e5c'}
              >
                {link.name}
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '0',
                  height: '2px',
                  backgroundColor: '#3a6073',
                  transition: 'width 0.3s ease'
                }} className="nav-underline"></span>
              </a>
            ))}

          </div>

          {/* Spacer to push mobile menu button to the right */}
          <div className="mobile-spacer" style={{ flex: '1' }}></div>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              fontSize: '1.25rem',
              cursor: 'pointer',
              color: '#3a4e5c',
              padding: '0.4rem 0.8rem',
              display: 'block',
              zIndex: 1001,
              marginLeft: '1rem',
              transition: 'all 0.2s ease'
            } as CustomCSSProperties}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.borderColor = '#cbd5e0';
              target.style.backgroundColor = '#f8fafb';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.borderColor = '#e2e8f0';
              target.style.backgroundColor = 'transparent';
            }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            zIndex: 1000,
            padding: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            display: isMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            fontFamily: "'Playfair Display', serif",
            transition: 'all 0.3s ease-in-out',
            maxHeight: isMenuOpen ? '500px' : '0',
            overflow: 'hidden',
            opacity: isMenuOpen ? 1 : 0
          } as CustomCSSProperties}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
            padding: '0.5rem 0'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={{
                  padding: '0.75rem 1.25rem',
                  color: '#2d3748',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  fontFamily: "'Playfair Display', serif",
                  backgroundColor: '#f8fafb',
                  borderLeft: '4px solid #3a6073',
                  cursor: 'pointer'
                }}
              >
                {link.name}
              </a>
            ))}
  
          </div>
        </div>
      </nav>
      
      {/* Add padding to the body to account for fixed navbar */}
      <style jsx global>{`
        body {
          padding-top: 70px; /* Match navbar height */
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          scroll-padding-top: 70px; /* Ensures anchor links account for fixed header */
        }
        
        /* Desktop Navigation */
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
            justify-content: flex-end;
          }
          
          .mobile-spacer {
            display: none;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        
        /* Tablet and Mobile Navigation */
        @media (max-width: 991px) {
          nav {
            padding: 0.8rem 1.5rem !important;
            height: 70px;
            display: flex;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: white;
            z-index: 1000;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          
          .logo {
            max-height: 42px !important;
            width: auto;
          }
          
          .mobile-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            z-index: 999;
            display: none;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .mobile-menu.active {
            display: flex;
          }
          
          .mobile-menu a {
            padding: 0.8rem 1rem;
            color: #333;
            text-decoration: none;
            font-size: 1rem;
            border-radius: 6px;
            transition: all 0.2s ease;
            background-color: #f8fafb;
            margin-bottom: 0.5rem;
          }
          
          .mobile-menu a:hover {
            background-color: #edf2f7;
            transform: translateX(4px);
          }
          
          .mobile-menu-btn {
            background: none;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.4rem 0.8rem;
            color: #3a4e5c;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
          }
          
          .mobile-menu-btn:hover {
            color: #2c4a5c;
            background-color: #f8fafb;
            border-color: #cbd5e0;
          }
        }
        
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 70px; /* Account for fixed header */
        }
        
        /* Add padding to sections to prevent content from being hidden behind fixed header */
        section {
          scroll-margin-top: 70px;
        }
        
        /* Nav link hover effect */
        .nav-link:hover .nav-underline {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Navbar;