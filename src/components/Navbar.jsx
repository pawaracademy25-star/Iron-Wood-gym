import React from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          <Dumbbell className="logo-icon" />
          <span>Iron & Wood</span>
        </a>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#programs" onClick={() => setIsOpen(false)}>Programs</a>
          <a href="#trainers" onClick={() => setIsOpen(false)}>Trainers</a>
          <a href="#schedule" onClick={() => setIsOpen(false)}>Schedule</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Join Now</a>
        </div>
      </div>
    </nav>
  );
}
