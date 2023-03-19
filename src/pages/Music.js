import React from 'react';
import {useParams} from "react-router";
import useFetchAll from "../service/useFetch";
import MusicPlayer from "../components/MusicPlayer";

const Music = () => {
    const {id} = useParams()
    const {data: song, dataPending, error} = useFetchAll('http://localhost:8000/music/'+id)
    return (
        <div className="music-details">
            { dataPending && <div>Loading...</div> }
            { error && <div> {error} </div> }
            {song && (
                    <article>
                        <h1> {song.title}</h1>
                        <p> By: {song.author} </p>
                    </article>
                )}
            {song && (
                <MusicPlayer song={song}/>
            )}
        </div>
    );
};

export default Music;