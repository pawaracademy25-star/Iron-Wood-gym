import React from 'react';
import './Trainers.css';

export function Trainers() {
  const trainers = [
    {
      name: "Marcus Chen",
      role: "Head Strength Coach",
      image: "/trainer_male.jpg",
      bio: "Marcus has 10 years of experience coaching powerlifting and weightlifting. He believes in mastering the basics before adding complexity."
    },
    {
      name: "Sarah Jenkins",
      role: "Conditioning Specialist",
      image: "/trainer_female.jpg",
      bio: "Former collegiate track athlete. Sarah focuses on functional mobility and high-output conditioning to build resilient bodies."
    }
  ];

  return (
    <section id="trainers" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Our Coaching Staff</h2>
          <p>Experienced professionals dedicated to teaching proper technique and programming.</p>
        </div>
        
        <div className="grid grid-2">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <div className="trainer-image-container">
                <img src={trainer.image} alt={`Portrait of ${trainer.name}`} className="trainer-image" />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <span className="trainer-role">{trainer.role}</span>
                <p className="trainer-bio">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
