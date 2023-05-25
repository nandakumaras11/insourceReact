import React from 'react';
import logo from './logo.svg';
import './App.css';
import './globals.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
