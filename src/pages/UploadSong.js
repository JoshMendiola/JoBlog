import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from "../service/usePost";

const UploadSong = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [audio, setAudio] = useState('');
    const [song_id, setSong_id] = useState(null);
    const [about, setAbout] = useState('');
    const [cover, setCover] = useState('');
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    const navigate = useNavigate();

    const { isPending, post } = usePost('http://localhost:8080/blog', {
        headers: { 'Content-Type': 'application/json' },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const song = { song_id, title, author, date, about, audio, cover };
        post(song);
    };

    return (
        <div className="create">
            <h2>Drop your song !!!</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Author:</label>
                <textarea
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>About your song: </label>
                <input
                    type="text"
                    required
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
                {isPending && <p>Uploading song...</p>}
                {!isPending && (
                    <button onClick={() => post()}>
                        Upload Song
                    </button>
                )}
            </form>
        </div>
    );
};

export default UploadSong;
