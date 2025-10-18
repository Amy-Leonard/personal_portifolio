import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventComponent from "../components/EventComponent";
import profile from "../images/profile.JPG";
import mm1 from "../images/mm1.JPG";
import SectionDivider from "../components/SectionDivider";

const CoolStuff: React.FC = () => {
    return (
    <div>
        <Header/>
            <EventComponent text="As a professional Event Coordinator, I specialize in creating immersive and unforgettable experiences that bring people together. From large community celebrations to intimate, story-driven gatherings, I design and execute events that engage guests from start to finish. 
            One of my most popular offerings is my custom-designed murder mystery events—interactive productions where every element, 
            from the storyline and character scripts to the décor and clues, is crafted specifically for the theme and audience. 
            These events transform ordinary evenings into thrilling adventures, encouraging guests to step into character, solve puzzles, 
            and connect through laughter and intrigue.

            My murder mystery productions have been a great success, consistently drawing enthusiastic participation and rave reviews. 
            Each event is a one-of-a-kind experience tailored to the group’s interests, setting, and size. 
            I write original plots, develop custom materials, coordinate actors or participants, and ensure that the event unfolds seamlessly. 
            Whether it’s a vintage whodunit in a historic venue or a modern mystery with a comedic twist, my goal is to make every guest feel like they’re part of the story.

            Beyond mysteries, I bring the same level of creativity and precision to all community and private events I coordinate. From concept 
            development and venue management to décor and guest engagement, I handle every detail with care. My mission is to blend storytelling, 
            organization, and atmosphere into experiences that not only entertain but also leave guests talking long after the event ends." images={[mm1]} title="Event Coodinator"/>


            <EventComponent text="As a game host, I bring energy, enthusiasm, and a deep love for interactive entertainment to every session I lead. 
            Whether it’s a strategic board game like Everdell, Thunder Road Vendetta, or Catan, or a high-energy social deduction experience like 
            Ultimate Werewolf or Two Rooms and a Boom, I create a welcoming and engaging atmosphere where players can connect, compete, and have fun. 
            I’m skilled at explaining complex rules clearly, managing group dynamics, and keeping the pace lively so that every player feels involved and invested. 
            My goal as a host is to ensure that each game night runs smoothly, sparks laughter and friendly rivalry, and leaves everyone eager for the next round." title="Game Host" image_on_the_right={false}/>
            
            
            <EventComponent text="My Dungeons & Dragons Collaboration Events are all about bringing creativity, 
            community, and storytelling together in a shared, interactive environment. One of the ways I do this is 
            through Homebrew Happy Hour—an open and collaborative session where Dungeon Masters and players come 
            together to brainstorm, share ideas, and build original D&D content. These gatherings give participants a 
            chance to refine their campaigns, create new characters, and exchange tips in a relaxed, social atmosphere 
            that encourages creativity and connection.

            I also plan larger community events where players and DMs work side by side to develop custom monsters, 
            stories, and settings. These sessions blend world-building and teamwork, allowing everyone to contribute their 
            imagination and see their creations take shape in real time. My goal with these D&D collaborations is to foster a 
            welcoming space where creativity thrives, ideas evolve through collaboration, and every participant leaves feeling 
            inspired to bring something new to their own adventures." title="D&D Collaboration Events"/>
        <Footer/>
    </div>
    )
} 


export default CoolStuff;