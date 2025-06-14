import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Achievements from './components/achievements/Achievements';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import ThemeToggle from './components/common/theme-toggle';

function App() {
  return (
    <>
      <Header />
      <ThemeToggle />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
