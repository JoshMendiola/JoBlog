import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Johmen Blog !!</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{color:"white",
                    backgroundColor: "#1fb1df",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
};

export default Navbar;