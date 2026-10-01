import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Schedule } from './components/Schedule';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="section text-center">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: 'var(--spacing-6)' }}>More Than Just A Gym</h2>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-lg)' }}>
              We believe in building strong bodies and strong communities. Our facility provides the space, equipment, and coaching necessary for you to train seriously without the distractions of a commercial health club.
            </p>
          </div>
        </section>

        <Programs />
        <Trainers />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
