import React, { useEffect, useRef, useState } from 'react';
import AudioControls from './AudioControls';

const MusicPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(null);
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
    });
    const [time, setTime] = useState({
        min: "",
        sec: "",
    });
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        audioRef.current = new Audio(`data:audio/mp3;base64,${props.song.audio}`);
        // plays the audio only after it is fully loaded
        audioRef.current.addEventListener('loadeddata', () => {
            setDuration(audioRef.current.duration);
        });
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [props.song.audio]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const handlePlayButton = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (duration) {
            const sec = Math.floor(duration);
            const min = Math.floor(sec / 60);
            const secRemain = sec % 60;
            setTime({
                min: min,
                sec: secRemain.toString().padStart(2, '0'),
            });
        }
    }, [duration]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (audioRef.current) {
                setSeconds(audioRef.current.currentTime);
                const min = Math.floor(audioRef.current.currentTime / 60);
                const sec = Math.floor(audioRef.current.currentTime % 60);
                setCurrTime({
                    min,
                    sec: sec.toString().padStart(2, '0'),
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [audioRef]);

    const coverImgSrc = `data:image/jpeg;base64,${props.song.cover}`;

    return (
        <div className="music-player">
            <img src={coverImgSrc} className="music-player-song-cover" alt="Album cover" />
            <div className="about-section">
                <h3>About this song:</h3>
                <p>{props.song.about}</p>
            </div>
            <div className="music-details">
                <AudioControls isPlaying={isPlaying} onPlayPauseClick={handlePlayButton} />
                <div>
                    <div className="time">
                        <p>
                            {currTime.min}:{currTime.sec}
                        </p>
                        <p>
                            {time.min}:{time.sec}
                        </p>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max={duration ? duration : 0}
                        value={seconds}
                        className="timeline"
                        onChange={(e) => {
                            audioRef.current.currentTime = parseInt(e.target.value);
                            setSeconds(parseInt(e.target.value));
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
