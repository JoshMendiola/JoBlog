import React from 'react';
import {Link} from "react-router-dom";

function MusicList(props) {
    return (
        <div>
            {props.music.map((music) => (
                <div className="music-preview" key = {music.id}>
                    <Link to={`/music/${music.id}`}>
                        <h2>{music.title}</h2>
                        <p>By: {music.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MusicList;