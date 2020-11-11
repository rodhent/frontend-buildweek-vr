import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Navbar from '../NavBar'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;