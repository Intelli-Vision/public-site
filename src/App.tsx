import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';
// import Investors from './components/Investors';
import ContactUs from './components/ContactUs';

import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/features" element={<Features />} />
            <Route path="/open-source" element={<OpenSource />} />
            {/* <Route path="/investors" element={<Investors />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
