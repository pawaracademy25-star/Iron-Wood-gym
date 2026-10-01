import React from 'react';
import { Activity, Anchor, Users } from 'lucide-react';
import './Programs.css';

export function Programs() {
  const programs = [
    {
      icon: <Anchor />,
      title: "Strength & Power",
      description: "Focus on barbell movements, compound lifts, and raw strength development. Suitable for beginners learning the basics or experienced lifters looking to push numbers."
    },
    {
      icon: <Activity />,
      title: "Functional Conditioning",
      description: "High-intensity interval training, kettlebells, and bodyweight exercises designed to improve cardiovascular health, endurance, and overall work capacity."
    },
    {
      icon: <Users />,
      title: "Small Group Training",
      description: "Coach-led sessions with a maximum of 6 people. Get the attention of personal training with the energy and community of a group environment."
    }
  ];

  return (
    <section id="programs" className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2>Training Programs</h2>
          <p>Structured approaches to help you build strength and fitness.</p>
        </div>
        
        <div className="grid grid-3">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
