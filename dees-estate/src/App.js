import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Search from './components/Search';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Features from './components/Features';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Search/>
      <HowItWorks/>
      <AboutUs/>
      <Features/>
    </>
  );
}

export default App;
