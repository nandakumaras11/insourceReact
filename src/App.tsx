import React, { Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './globals.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Home/Home';
import Footer from './Components/Footer/Footer';
import "aos/dist/aos.css";
import { Routes } from './Routes';
import ScrollToTop, { Loader } from './Components/NavBar/SingleComponents/SingleComponent';
// import { useScrollToTop } from './Components/NavBar/SingleComponents/SingleComponent';
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      easing: 'ease',
      delay: 100,
      // disable: 'mobile'
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Routes />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
