import React from 'react';
import {useParams} from "react-router";
import MusicPlayer from "../components/MusicPlayer";
import useFetch from "../service/UseFetch";
import { useNavigate } from 'react-router-dom';
import backbutton from "../images/backbutton.png"

const Music = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {data: songData, dataPending, error} = useFetch('http://localhost:8080/noauth/song/'+id)

    return (
        <div className="music-details">
            <button onClick={() => navigate(-1)}>
                <img src={backbutton} alt="backbutton" className= "back-button"/>
            </button>
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