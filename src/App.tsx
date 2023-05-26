import React, { Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './globals.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Home/Home';
import Footer from './Components/Footer/Footer';

import { Routes } from './Routes';
import ScrollToTop, { Loader } from './Components/NavBar/SingleComponents/SingleComponent';
// import { useScrollToTop } from './Components/NavBar/SingleComponents/SingleComponent';

function App() {
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
