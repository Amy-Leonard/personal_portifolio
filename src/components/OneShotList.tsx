import React, { useEffect, useState } from "react";
import "./styles/one_shot_list.css";
import "./styles/one_shot_list_title.css";
import OneShotItem from "./OneShotItem"

type Props = {
    one_shots: React.ReactNode[];
    title?: string;
}

const OneShotList:React.FC<Props> = ({ title, one_shots }) => {

    return (
    <div className="one_shot_list_wrapper">
      <div className="one_shot_list_title">
        {title}
      </div>
      <div className="one_shot_list">
        {one_shots.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
    </div>
    )
} 


export default OneShotList;