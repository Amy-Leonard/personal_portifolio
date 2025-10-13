import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextBlock from '../components/TextBlock'

const CoolStuff: React.FC = () => {
    return (
    <div>
        <Header/>
            <TextBlock text="THIS IS COOL STUFF"/>
        <Footer/>
    </div>
    )
} 


export default CoolStuff;