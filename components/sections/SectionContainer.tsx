import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className = '',
  style = {}
}) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-20 lg:py-24 ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        ...style
      }}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
