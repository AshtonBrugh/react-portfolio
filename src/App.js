import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js';


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
