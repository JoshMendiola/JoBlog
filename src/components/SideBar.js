import React from 'react';
import JohmenLogo from "../images/johmenmeow.PNG"
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar">
            <img src={JohmenLogo} alt="JohmenLogo" />
            <Link to="/">Home</Link>
            <Link to="/music" >Music</Link>
            <Link to="/createblog" >New Blog</Link>
            <Link to="/uploadsong">Upload Song</Link>
        </div>
    );
};

export default SideBar;