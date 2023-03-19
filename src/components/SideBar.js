import React from 'react';
import JohmenSidebar from "../images/johmenmeow.PNG"
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar">
            <img src={JohmenSidebar} alt="My Image" />
            <Link to="/">Home</Link>
            <Link to="/create" >New Blog</Link>
            <Link to="/music" >Music</Link>
        </div>
    );
};

export default SideBar;