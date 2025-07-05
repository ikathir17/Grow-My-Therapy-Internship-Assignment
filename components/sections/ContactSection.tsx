import React, { useState, useEffect, CSSProperties } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ContactFormInputs {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

const ContactSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile first

  useEffect(() => {
    // This code runs only on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Base link styles
  const linkStyle: React.CSSProperties = {
    color: '#4a6a85',
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    transition: 'all 0.2s ease',
  };

  return (
    <section id="contact" className="contact-section">
      {/* Decorative Background Image */}
      <div className="contact-background" />
      
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-text">
            I'm currently accepting new clients for both in-person and telehealth sessions. 
            Please fill out the form or contact me directly to schedule a free 15-minute consultation.
          </p>
          
          <div className="contact-details">
            <p className="contact-text">
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+13235550192"
                className="contact-link"
              >
                (323) 555-0192
              </a>
            </p>
            <p className="contact-text">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:serena@blakepsychology.com"
                className="contact-link"
              >
                serena@blakepsychology.com
              </a>
            </p>
            <p className="contact-text">
              <strong>Location:</strong>{' '}
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                1287 Maplewood Drive<br />
                Los Angeles, CA 90026
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="contact-subheading">Office Hours</h3>
            <p className="contact-text">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2 className="contact-form-heading">Get In Touch</h2>
          <ContactForm />
        </div>
      </div>
      
      <footer className="contact-footer">
        <div className="contact-links">
          {['#hero', '#', '#', '#'].map((href, index) => {
            const labels = ['Home', 'Privacy Policy', 'Good Faith Estimate', 'Client Portal'];
            return (
              <a 
                key={index}
                href={href}
                className="contact-link"
              >
                {labels[index]}
              </a>
            );
          })}
        </div>
        
        <div className="contact-copyright">
          &copy; {new Date().getFullYear()} Dr. Serena Blake, Ph.D. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      setSubmitStatus({ success: true, message: 'Your message has been sent successfully!' });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1.25rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit',
  };

  const errorStyle: CSSProperties = {
    color: '#e53e3e',
    fontSize: '0.875rem',
    marginTop: '-0.75rem',
    marginBottom: '0.5rem'
  };

  const buttonStyle: CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3a6073',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const buttonHoverStyle: CSSProperties = {
    backgroundColor: '#2c4a5c'
  };

  const buttonDisabledStyle: CSSProperties = {
    opacity: 0.7,
    cursor: 'not-allowed'
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitStatus && (
        <div style={{
          padding: '0.75rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          backgroundColor: submitStatus.success ? '#f0fdf4' : '#fef2f2',
          color: submitStatus.success ? '#166534' : '#991b1b',
          border: `1px solid ${submitStatus.success ? '#86efac' : '#fecaca'}`
        }}>
          {submitStatus.message}
        </div>
      )}
      
      <div>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name *</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          style={{
            ...inputStyle,
            borderColor: errors.name ? '#e53e3e' : '#ddd'
          }}
        />
        {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone</label>
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            pattern: {
              value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: 'Please enter a valid phone number'
            }
          })}
          style={{
            ...inputStyle,
            borderColor: errors.phone ? '#e53e3e' : '#ddd'
          }}
        />
        {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email *</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          style={{
            ...inputStyle,
            borderColor: errors.email ? '#e53e3e' : '#ddd'
          }}
        />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>What brings you here? *</label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'This field is required' })}
          style={{
            ...inputStyle,
            borderColor: errors.message ? '#e53e3e' : '#ddd',
            minHeight: '100px',
            resize: 'vertical'
          }}
        />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      <div>
        <label htmlFor="preferredTime" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Preferred time to reach you</label>
        <input
          id="preferredTime"
          type="text"
          placeholder="e.g., Weekdays after 5pm"
          {...register('preferredTime')}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <input
            type="checkbox"
            {...register('agreeToContact', { required: 'You must agree to be contacted' })}
            style={{
              marginTop: '0.25rem',
              width: '1.25rem',
              height: '1.25rem',
              borderColor: errors.agreeToContact ? '#e53e3e' : '#ddd'
            }}
          />
          <span style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            I agree to be contacted by Dr. Blake or a member of her team regarding my inquiry.
          </span>
        </label>
        {errors.agreeToContact && <p style={errorStyle}>{errors.agreeToContact.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          ...buttonStyle,
          ...(isSubmitting ? buttonDisabledStyle : {}),
          ':hover': isSubmitting ? {} : buttonHoverStyle
        } as CSSProperties}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactSection;
