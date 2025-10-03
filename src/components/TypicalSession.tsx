import React, { useEffect, useState } from "react";
import profile from "../images/profile.png"
import "./styles/typical_session.css";

const TypicalSession:React.FC = () => {
    return (
    <div>
        <div className="typical_session__title">
            <h1>Typical Session</h1>
        </div>
        <div className="typical_session">
            <div className="typical_session__text">
                <div className="typical_session__text_block">
                    Joining a game run by me guarantees a well-prepared and immersive experience. 
                    I arrive early to set up the gaming area and ensure everyone understands the rules and rituals we'll be using. 
                    My custom content promises an all-encompassing D&D adventure, whether it's a campaign or a one-shot.
                </div>

                <div className="typical_session__text_block">
                    Players do not need to bring anything but are encouraged to bring whatever helps them delve into their character,
                     such as dressing up or bringing a themed set of dice. I provide player kits containing character sheets, dice, and rule summaries.
                </div>

                <div className="typical_session__text_block">
                    For in-depth character creation and campaigns, I advocate for a separate, Session Zero, to discuss expectations, 
                    create custom characters, and establish group dynamics. In one-shots, players can select from a wide array of pre-generated characters.
                </div>

                <div className="typical_session__text_block">
                    Regardless of the format, the session unfolds over approximately four hours, with rich storytelling, 
                    engaging roleplay, and thrilling encounters. Players can expect a blend of exploration, combat, and 
                    problem-solving, with opportunities for character development and interaction at every turn. 
                    I foster a collaborative environment where every player's voice is heard, and their actions shape the narrative
                </div>

                <div className="typical_session__text_block">
                    Essentially, I view the role of the Dungeon Master as the storyteller, game facilitator, 
                    world builder, encounter designer, character actor, improviser, narrative architect, arbiter 
                    of fun, rule interpreter, content creator, balancer, lore keeper, ambiance setter, conflict 
                    resolution specialist, teacher/mentor, time manager, adjudicator of consequences, and innovator.
                </div>

            </div>

            <div className="typical_session__image_wrapper">
                <img src={profile} alt="profile" className="typical_session__image"/>
            </div>
        </div>
    </div>
    )
} 


export default TypicalSession;