import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Search from './components/Search';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Search/>
      <HowItWorks/>
      <AboutUs/>
    </>
  );
}

export default App;
