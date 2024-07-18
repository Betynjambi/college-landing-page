// src/App.js
import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
