import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Hackathons />
      <Achievements />
      <Resume />
      <Contact />
      <SocialLinks />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
