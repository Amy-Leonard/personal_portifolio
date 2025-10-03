import React, { useEffect, useState } from "react";
import "./styles/one_shot_list.css";
import OneShotItem from "./OneShotItem"



const OneShotList:React.FC = () => {

    return (
    <div className="one_shot_list">
      <OneShotItem name="Turmoil in Tarmsworth" description="A quaint little town faces a mysterious peril: people are randomly disappearing. Help the citizens of Tarmsworth uncover the mystery, rescue their citizens, and become the local champion!"/>
      <OneShotItem name="Turmoil in Tarmsworth" description="A quaint little town faces a mysterious peril: people are randomly disappearing. Help the citizens of Tarmsworth uncover the mystery, rescue their citizens, and become the local champion!"/>
      <OneShotItem name="Turmoil in Tarmsworth" description="A quaint little town faces a mysterious peril: people are randomly disappearing. Help the citizens of Tarmsworth uncover the mystery, rescue their citizens, and become the local champion!"/>
    </div>
    )
} 


export default OneShotList;