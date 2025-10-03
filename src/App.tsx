import React, {useState} from 'react';
import Home from './pages/Home';
import OneShots from './pages/OneShots';
import CoolStuff from './pages/CoolStuff';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/oneshots" element={<OneShots/>} />
        <Route path="/coolstuff" element={<CoolStuff/>} />
      </Routes>
    </Router>
  );

    return (
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
      )
  
  
 
}

export default App;
