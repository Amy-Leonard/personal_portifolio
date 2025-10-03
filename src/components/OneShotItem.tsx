import React, { useEffect, useState } from "react";
import "./styles/footer.css";
import "./styles/one_shot_item.css";

type Props = {
    name: string;
    description: string;
}


const OneShotItem:React.FC<Props> = ({name, description}) => {

    return (
    <div className="one_shot_item">
      <div className="one_shot_title">{name}</div>
      <div className="one_shot_description">{description}</div>
    </div>
    )
} 


export default OneShotItem;