import React, {useEffect, useRef, useState} from 'react';



const MusicPlayer = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);


    useEffect(() => {
        audioRef.current = new Audio(props.song.url);
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
            <button onClick={handlePlayButton}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
};

export default MusicPlayer;