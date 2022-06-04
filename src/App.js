import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Search from './components/Search';
import HowItWorks from './components/HowItWork';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Search/>
      <HowItWorks/>
      <AboutUs/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
