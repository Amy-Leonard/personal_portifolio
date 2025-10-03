import React from 'react';
import Home from './pages/Home';
import OneShots from './pages/OneShots';
import CoolStuff from './pages/CoolStuff';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oneshots" element={<OneShots />} />
        <Route path="/coolstuff" element={<CoolStuff />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
