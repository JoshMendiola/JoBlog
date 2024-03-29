import React from "react";
import { ReactComponent as Play } from "../assets/playbutton.svg";
import { ReactComponent as Pause } from "../assets/pausebutton.svg";

const AudioControls = ({
                           isPlaying,
                           onPlayPauseClick,
                       }) => (
    <div className="audio-controls">
        {isPlaying ? (
            <button
                type="button"
                className="pause"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <Pause />
            </button>
        ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <Play />
            </button>
        )}
    </div>
);

export default AudioControls;