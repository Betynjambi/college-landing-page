// src/components/Programs.js
import React from "react";
import './Programs.css';

const programsData = [
    {
        title: "Carpentry",
        description: "Learn the art of woodworking and craftsmanship with our comprehensive carpentry program.",
        imageUrl: process.env.PUBLIC_URL + "/carpentry.jpg"
    },
    {
        title: "Carpentry",
        description: "Learn the art of woodworking and craftsmanship with our comprehensive carpentry program.",
        imageUrl: process.env.PUBLIC_URL + "/carpentry.jpg"
    },
    {
        title: "Carpentry",
        description: "Learn the art of woodworking and craftsmanship with our comprehensive carpentry program.",
        imageUrl: process.env.PUBLIC_URL + "/carpentry.jpg"
    },
    {
        title: "Masonry",
        description: "Master the skills of bricklaying, stonework, and construction in our masonry program.",
        imageUrl: process.env.PUBLIC_URL + "/masonry.jpg"
    },
    {
        title: "Hair Dressing",
        description: "Become a professional hair stylist with our hands-on hair dressing courses.",
        imageUrl: process.env.PUBLIC_URL + "/hairdressing.jpg"
    },
    {
        title: "Computer Packages/Digital Literacy",
        description: "Enhance your digital skills with our computer packages and digital literacy programs.",
        imageUrl: process.env.PUBLIC_URL + "/computer.jpg"
    }
];

const Programs = () => {
    return (
        <section id="programs" className="programs">
            <h2>Our Programs</h2>
            <p>Explore the diverse range of programs we offer.</p>
            <div className="programs-grid">
                {programsData.map((program, index) => (
                    <div key={index} className="program-card">
                        <img src={program.imageUrl} alt={program.title} className="program-image" />
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Programs;

