import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import OpenSource from './OpenSource';
import Footer from './Footer';
// import Investors from './components/Investors';
import ContactUs from './ContactUs';

import '../styles/global.css';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
