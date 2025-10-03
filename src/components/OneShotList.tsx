import React, { useEffect, useState } from "react";
import "./styles/one_shot_list.css";
import OneShotItem from "./OneShotItem"



const OneShotList:React.FC = () => {

    return (
    <div className="one_shot_list">
      <OneShotItem name="Bikinis, Beaches and Bloodsuckers" description="Come solve the problem of the missing surfers before the big surf contest finale "/>
      <OneShotItem name="Hillymoore Harvest Festival " description="Enjoy a relaxing day at the fair! Play games, win prizes and view the award winning local produce "/>
      <OneShotItem name="Perilous Package Pursuit" description="You must deliver a package through a swamp before a large storm makes your path impossible to cross"/>
      <OneShotItem name="Sanctuary of Slimebound Souls" description="Cult of Weirdos"/>
      <OneShotItem name="Study By Play - Ep. 1 Jungle" description="Enhance your knowledge of dnd the best way possible - by playing! Custom encounters picked to best suit the tables learning goals "/>
      <OneShotItem name="Study By Play - Ep. 2 Temple" description="Enhance your knowledge of dnd the best way possible - by playing! Custom encounters picked to best suit the tables learning goals "/>
      <OneShotItem name="Turmoil In Tarmsworth" description="Something is disturbing this otherwise peaceful hamlet, some folks are acting weird, some are gone all together"/>
      <OneShotItem name="Wizard Water Woes" description="Help an old wizard retrieve the final ingredient he needs that is  found on the top of a mountain"/>
      <OneShotItem name="Study By Play" description="Enhance your knowledge of dnd the best way possible - by playing! Custom encounters picked to best suit the tables learning goals "/>

    </div>
    )
} 


export default OneShotList;