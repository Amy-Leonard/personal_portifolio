import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventComponent from "../components/EventComponent";
import profile from "../images/profile.png";
import SectionDivider from "../components/SectionDivider";

const CoolStuff: React.FC = () => {
    return (
    <div>
        <Header/>
            <EventComponent text="Murder Mystery" images={[profile]} title="Murder Mystery"/>
            <EventComponent text="Ultimate Werewolf, Two rooms and a Booom" images={[profile]} title="Game Host" image_on_the_right={false}/>
            <EventComponent text="D&D Collaboration Events" images={[profile]} title="D&D Collaboration Events"/>
        <Footer/>
    </div>
    )
} 


export default CoolStuff;