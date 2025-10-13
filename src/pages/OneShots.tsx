import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import OneShotList from '../components/OneShotList';
import OneShotItem from "../components/OneShotItem";
const OneShots: React.FC= () => {

    let beginner_one_shots = [
        <OneShotItem name="Bikinis, Beaches and Bloodsuckers" description="Come solve the problem of the missing surfers before the big surf contest finale "/>,
        <OneShotItem name="Hillymoore Harvest Festival " description="Enjoy a relaxing day at the fair! Play games, win prizes and view the award winning local produce "/>,
        <OneShotItem name="Perilous Package Pursuit" description="You must deliver a package through a swamp before a large storm makes your path impossible to cross"/>,
        <OneShotItem name="Sanctuary of Slimebound Souls" description="Cult of Weirdos"/>,
        <OneShotItem name="Study By Play - Ep. 1 Jungle" description="Enhance your knowledge of dnd the best way possible - by playing! Custom encounters picked to best suit the tables learning goals "/>,
        <OneShotItem name="Study By Play - Ep. 2 Temple" description="Enhance your knowledge of dnd the best way possible - by playing! Custom encounters picked to best suit the tables learning goals "/>,
        <OneShotItem name="Turmoil In Tarmsworth" description="Something is disturbing this otherwise peaceful hamlet, some folks are acting weird, some are gone all together"/>,
        <OneShotItem name="Wizard Water Woes" description="Help an old wizard retrieve the final ingredient he needs that is  found on the top of a mountain"/>,
    ]

    let advanced_one_shots = [
        <OneShotItem name="Ashwood Family Reunion" description="Eleanor Ashwood needs your help clearing her house of ghosts so that she can host a dinner party."/>,
        <OneShotItem name="Cookies and Carnage" description="Help retrieve Gam Gam’s lost recipe from her abandoned bakery so that you can make the best cookies."/>,
        <OneShotItem name="The Dreadful Dealings of the Damned" description="Figure out what has been cursing a small town by twisting their hopes, dreams and wishes."/>,
        <OneShotItem name="Frozen Fjord" description="Travel across an icy wasteland to restore the warmth to a village with no hope."/>,
        <OneShotItem name="Heist of the Hummingbird" description="Get in and out of a lavish party without getting caught in this Spelljammer heist."/>,
        <OneShotItem name="Moonlit Matrimony" description="Attend the red moon wedding."/>,
        <OneShotItem name="Reflections of Rimini" description="Traverse a trapped dungeon to find the creators heart."/>,

    ]
    return (
    <div>
        <Header/>
        <div>
            <OneShotList title="Beginner One Shots" one_shots={beginner_one_shots}/>
        </div>
        <div>
            <OneShotList title="Advanced One Shots" one_shots={advanced_one_shots}/>
        </div>
        <Footer/>
    </div>
    )
} 


export default OneShots;