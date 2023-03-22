import React from 'react';
import JohmenSidebar from "../images/johmenmeow.PNG"
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar">
            <img src={JohmenSidebar} alt="JohmenLogo" />
            <Link to="/">Home</Link>
            <Link to="/createblog" >New Blog</Link>
            <Link to="/music" >Music</Link>
        </div>
    );
};

export default SideBar;