import React from 'react';
import { Dumbbell } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <Dumbbell className="logo-icon" />
              <span>Iron & Wood</span>
            </a>
            <p className="footer-desc">
              A functional training facility focused on strength, conditioning, and community.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-group">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#programs">Programs</a>
              <a href="#trainers">Trainers</a>
              <a href="#schedule">Schedule</a>
            </div>
            
            <div className="footer-group">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Waiver</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Iron & Wood Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
