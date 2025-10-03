import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import OneShotList from '../components/OneShotList';

const OneShots: React.FC= () => {
    return (
    <div>
        <Header/>
        <div>
            <OneShotList/>
        </div>
        <Footer/>
    </div>
    )
} 


export default OneShots;