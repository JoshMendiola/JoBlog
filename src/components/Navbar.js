import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Johmen Blog !!</h1>
            <div className="links">
                <Link to="/login" style={{color:"white",
                    backgroundColor: "#1fb1df",
                    borderRadius: "8px"
                }}>Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;