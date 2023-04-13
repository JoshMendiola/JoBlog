import React from 'react';
import {useParams} from "react-router";
import MusicPlayer from "../components/MusicPlayer";
import useFetch from "../service/useFetch";

const Music = () => {
    const {id} = useParams()
    const {data: songData, dataPending, error} = useFetch('http://localhost:8080/song/'+id)
    return (
        <div className="music-details">
            { dataPending && <div>Loading...</div> }
            { error && <div> {error} </div> }
            {songData && (
                    <article>
                        <h1> {songData.title}</h1>
                        <p> By: {songData.author} </p>
                    </article>
                )}
            {songData && (
                <MusicPlayer song={songData}/>
            )}
        </div>
    );
};

export default Music;