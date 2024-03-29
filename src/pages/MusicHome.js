import React from 'react';
import useFetch from "../service/UseFetch";
import MusicList from "../components/MusicList";

function MusicHome(props) {
    const {data: music, dataPending: musicPending, error} = useFetch('http://localhost:8080/noauth/songs')
    return (
        <div className="music">
            {error && <div><h1>{error}</h1></div>}
            {musicPending && <div>Loading...</div>}
            {music && <MusicList music={music}/>}
        </div>
    );
}

export default MusicHome;