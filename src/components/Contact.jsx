import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid grid-2">
          <div>
            <div className="section-header">
              <h2>Visit Us</h2>
              <p>Come down to the gym for a free trial session or consultation.</p>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <strong>Address</strong>
                  <p>124 Industrial Way, Unit B<br />Portland, OR 97204</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <strong>Phone</strong>
                  <p>(555) 234-5678</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <strong>Email</strong>
                  <p>info@ironandwoodgym.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
