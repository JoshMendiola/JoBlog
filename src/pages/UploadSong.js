import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from "../service/usePost";
import GetToday from "../utils/GetToday";

const UploadSong = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [audio, setAudio] = useState(null);
    const [song_id, setSong_id] = useState(null);
    const [about, setAbout] = useState('');
    const [cover, setCover] = useState(null);
    const date = GetToday();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [submit, setSubmit] = useState(false);

    const {responseData, dataPending, error } = usePost('http://localhost:8080/song', formData, 'multipart/form-data', submit  && formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const song = { song_id, title, author, date, about };
        const newFormData = new FormData();

        newFormData.append("cover", cover);
        newFormData.append('audio', audio);

        newFormData.append('song', new Blob([JSON.stringify(song)], { type: 'application/json' }))
        setFormData(newFormData);
        setSubmit(true)
    };

    if (!dataPending && !error && responseData) {
        console.log('new song :)');
        setIsPending(false);
        navigate('/');
    }

    return (
        <div className="create">
            <h2>Drop your song !!!</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Author:</label>
                <input
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>About your song: </label>
                <textarea
                    type="text"
                    required
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
                <label>Song cover:</label>
                <input
                    type="file"
                    name="cover"
                    onChange={(e) => {setCover(e.target.files[0])}}
                />
                <label>MP3:</label>
                <input
                    type="file"
                    name="audio"
                    onChange={(e => {setAudio(e.target.files[0])})}
                />
                {!isPending && (<button>Upload song</button>)}
                {isPending && <button disabled>Uploading song...</button>}
            </form>
        </div>
    );
};

export default UploadSong;
