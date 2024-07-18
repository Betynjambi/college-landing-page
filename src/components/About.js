// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <h2>About Us</h2>
            <p>Learn more about our history, mission, and values.</p>
            <div className="about-content">
                <div className="about-item">
                    <h3>Our Mission</h3>
                    <p>Our mission is to provide high-quality education and empower our students to succeed in their careers and personal lives.</p>
                </div>
                <div className="about-item">
                    <h3>Our Vision</h3>
                    <p>Our vision is to be a leading institution recognized for excellence in education, innovation, and community engagement.</p>
                </div>
                <div className="about-item">
                    <h3>Who We Are</h3>
                    <p>We are a diverse and inclusive community of learners and educators committed to fostering knowledge, creativity, and leadership.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
