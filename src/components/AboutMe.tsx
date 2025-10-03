import React, { useEffect, useState } from "react";
import profile from "../images/profile.png"
import "./styles/about_me.css";

const AboutMe:React.FC = () => {
    return (
    <div>
        <div className="about_me__title">
            <h1>About me</h1>
        </div>
        <div className="about_me">
            <div className="about_me__image_wrapper">
                <img src={profile} alt="profile" className="about_me__image"/>
            </div>
            <div className="about_me__text">
                <div className="about_me__text_block">
                My name is Amy, and I have over five years of experience both playing and Running (DMing) 
                Dungeons & Dragons (D&D). I first discovered D&D through a board game club at my college, Cal Poly Pomona, 
                and instantly fell in love with the roleplaying and collaborative storytelling that make this game so unique. 
                The game demands players to unleash their imagination, creating characters and stories that are entirely their own. 
                Throughout the years, I have created and run custom content, and have helped others do the same. 
                Now, I am excited to broaden my horizons and bring my enthusiasm and experience to other tables, providing a dedicated and passionate DM to enhance the gaming experience.
                </div>

                <div className="about_me__text_block">
                    I bring a loud, outgoing energy to my sessions, harboring an engaging and dynamic atmosphere. 
                    I encourage role play-heavy games, where players can truly immerse themselves in their characters and the world. 
                    I enjoy making my own physical props to enhance the gaming experience and use music to add atmosphere to the sessions. 
                    When you play at my table, you can expect a vibrant, inclusive, and immersive adventure where creativity and storytelling 
                    take center stage.  My table will always be LGBTQIA+ friendly, and I make sure to adjust content based on triggers, 
                    age, and individual preferences to ensure everyone is comfortable and included.
                </div>
            </div>
        </div>
    </div>
    )
} 


export default AboutMe;