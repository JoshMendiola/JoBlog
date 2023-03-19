import React, {useEffect, useRef, useState} from 'react';
import useSound from "use-sound";



const MusicPlayer = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(props.song.url));

    const handlePlayButton = () =>
    {
        if (isPlaying) {
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }


    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <div className="music-player">
            <div>
                {!isPlaying ? (
                    <button onClick={handlePlayButton}>
                    </button>
                ) : (
                    <button onClick={handlePlayButton}>
                    </button>
                )}
            </div>
        </div>
    );
};

export default MusicPlayer;