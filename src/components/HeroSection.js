// src/components/HeroSection.js
import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`hero ${isMobile ? 'mobile' : ''}`}>
      <h1>Welcome to Panda College</h1>
      <p>Empowering the future, one student at a time.</p>
    </section>
  );
}

export default HeroSection;

