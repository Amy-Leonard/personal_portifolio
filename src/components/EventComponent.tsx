import React, { useEffect, useState } from "react";
import "./styles/event_component.css";
import TextBlock from "./TextBlock";
import SectionDivider from "./SectionDivider";

type Props = {
    text: string;
    title: string;
    images?: string[];
    image_on_the_right?: boolean;
    add_divider_below?: boolean;
}


const EventComponent:React.FC<Props> = ({text, title, images = [], image_on_the_right=true, add_divider_below=true}) => {

    if (image_on_the_right){
       return (
      <div className="event_component__wrapper">
        <div className="event_component__content">
          
          <div className="event_component__text_block_wrapper">
            <div className="event_component__title">
              <p>{title}</p>
            </div>
            <TextBlock text={text}/>
          </div>
          {images.map((component, index) => (
              <div className="event_component__image_wrapper">
                  <img src={component} className="event_component__image"/>
                </div>  
            ))
          }
        </div>
        {add_divider_below && <SectionDivider />}
      </div>
      )
    }
    else{
      return (
      <div className="event_component__wrapper">
        <div className="event_component__content">
          {images.map((component, index) => (
              <div className="event_component__image_wrapper">
                  <img src={component} className="event_component__image"/>
                </div>  
            ))
          }
          <div className="event_component__text_block_wrapper">
            <div className="event_component__title">
              <p>{title}</p>
            </div>
            <TextBlock text={text}/>
          </div>
        </div>
        {add_divider_below && <SectionDivider />}
      </div>
      )
    }

   
} 


export default EventComponent;