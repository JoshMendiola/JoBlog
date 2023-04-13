import React, { useEffect, useRef, useState } from 'react';
import AudioControls from './AudioControls';

const MusicPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(`data:audio/mp3;base64,${props.song.audio}`);
        // plays the audio only after it is fully loaded
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
    }, [props.song.audio]);

    const handlePlayButton = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const coverImgSrc = `data:image/jpeg;base64,${props.song.cover}`;

    return (
        <div className="music-player">
            <img src={coverImgSrc} className="music-player-song-cover" alt="Album cover" />
            <AudioControls isPlaying={isPlaying} onPlayPauseClick={handlePlayButton} />
            <div className="about-section">
                <h2>About this song:</h2>
                <p>{props.song.about}</p>
            </div>
        </div>
    );
};

export default MusicPlayer;
