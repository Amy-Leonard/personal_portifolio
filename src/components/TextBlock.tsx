import React, { useEffect, useState } from "react";
import "./styles/text_block.css";

type Props = {
    text: string;
}


const OneShotItem:React.FC<Props> = ({text}) => {

    return (
    <div className="text_block__wrapper">
      {text}
    </div>
    )
} 


export default OneShotItem;