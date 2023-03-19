import React, {useState} from 'react';
import useSound from "use-sound";
import {AiFillPauseCircle, AiFillPlayCircle, BiSkipNext, BiSkipPrevious} from "react-icons/all";


const MusicPlayer = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(props.url);

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        }
        else {
            play();
            setIsPlaying(true);
        }
    }
    return (
        <div className="music-player">
            <h2>Playing Now</h2>
            <img
                className="musicCover"
                src="https://picsum.photos/200/200"
            />
            <div>
                <h3 className="title">Rubaiyyan</h3>
                <p className="subTitle">Qala</p>
            </div>
            <div>
                <button className="playButton">
                        <BiSkipPrevious />
                </button>
                {!isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                            <AiFillPlayCircle />
                    </button>
                ) : (
                    <button className="playButton" onClick={playingButton}>
                            <AiFillPauseCircle />
                    </button>
                )}
                <button className="playButton">
                        <BiSkipNext />
                </button>
            </div>
        </div>
    );
};

export default MusicPlayer;