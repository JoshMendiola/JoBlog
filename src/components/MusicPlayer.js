import React, {useEffect, useRef, useState} from 'react';
import AudioControls from "./AudioControls";



const MusicPlayer = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(props.song.url);
        //plays the audio only after it is fully loaded
        audioRef.current.addEventListener('loadeddata', () => {
            if (isPlaying) {
                audioRef.current.play();
            }
        });
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [props.song.url]);

    const handlePlayButton = () =>
    {
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div className="music-player">
            <img src = {props.song.cover} className="music-player-song-cover"/>
            <AudioControls
                isPlaying={isPlaying}
                onPlayPauseClick={setIsPlaying}
            />
            <div className="about-section">
                <h2>About this song:</h2>
                <p>
                    {props.song.about}
                </p>
            </div>
        </div>
    );
};

export default MusicPlayer;