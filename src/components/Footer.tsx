import React, { useEffect, useState } from "react";
import "./styles/footer.css";


const Footer:React.FC = () => {

    return (
    <div >
       <div className="footer_wrapper">
            <h3 className="footer_text">Follow me on Social Media: </h3>
            <div className="footer_link">Discord</div>
            <div className="footer_link">Patreon</div>
            <div className="footer_link">TikTok</div>
       </div>
       
    </div>
    )
} 


export default Footer;