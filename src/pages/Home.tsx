import React, { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import "./styles/home.css";
import TypicalSession from "../components/TypicalSession";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC= () => {
    return (
    <div>
        <Header/>
        <div className="home_page">
            <AboutMe/>
            <TypicalSession/>
        </div>
        <Footer/>
    </div>
    )
} 


export default Home;