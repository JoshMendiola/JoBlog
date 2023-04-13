import React from 'react';
import {Link} from "react-router-dom";

function MusicList(props) {


    return (
        <div>
            {props.music.map((song) => (
                <div className="music-preview" key = {song.song_id}>
                    <Link to={`/music/${song.song_id}`} className={"music-list-button"} >
                        <div>
                                <h2>{song.title}</h2>
                                <p>By: {song.author}</p>
                                <img src={song.cover} alt="song cover"/>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MusicList;