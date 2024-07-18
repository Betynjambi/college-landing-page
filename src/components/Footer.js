// src/components/Footer.js
import React, { useEffect, useState } from "react";
import './Footer.css';

const Footer = () => {
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
        <footer className={`footer ${isMobile ? 'mobile' : ''}`}>
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>We are dedicated to providing quality education and empowering students for their future careers.</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@college.edu</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 College St., City, Country</p>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Panda. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
