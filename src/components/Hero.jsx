import React from 'react';
import './Hero.css';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-background">
        <img src="/hero.jpg" alt="Gym floor with squat rack and weights" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Real training for real people.</h1>
          <p className="hero-subtitle">
            A functional training facility focused on strength, conditioning, and community. 
            No gimmicks, just the equipment and coaching you need to improve.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">View Memberships</a>
            <a href="#programs" className="btn btn-secondary btn-lg btn-white">Our Programs</a>
          </div>
        </div>
      </div>
    </header>
  );
}
