import React, { useEffect, useState } from "react";
import "./styles/header.css";
import {Link} from "react-router-dom";



const Header:React.FC = () => {

    return (
    <div className="header_wrapper">
        <Link className="header_button" to="/" >Home</Link>
        <Link className="header_button" to="/oneshots">One Shots</Link>
        <Link className="header_button" to="/coolstuff">Cool Stuff</Link>
    </div>
    )
} 


export default Header;