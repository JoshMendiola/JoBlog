import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>page cannot be found :(
                try being better !!!!</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    );
};

export default NotFound;