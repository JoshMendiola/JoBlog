import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from "../service/UsePost";
import GetToday from "../utils/GetToday";
import ImageResizer from "react-image-file-resizer";
import NoMusicImage from "../images/no-music-image.png"

const UploadSong = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [audio, setAudio] = useState(null);
    const [song_id] = useState(null);
    const [about, setAbout] = useState('');
    const [cover, setCover] = useState(NoMusicImage);
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
        setIsPending(true)

        // Convert the base64 data URI to a Blob object
        const coverBlob = dataURItoBlob(cover);

        newFormData.append('cover', coverBlob, 'cover.jpg');
        newFormData.append('audio', audio);

        newFormData.append('song', new Blob([JSON.stringify(song)], { type: 'application/json' }))
        setFormData(newFormData);
        setSubmit(true)
    };

    function dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }


    const handleCoverUpload = (e) => {
        const file = e.target.files[0]
        ImageResizer.imageFileResizer(
            file,
            1024, // width
            1024, // height
            "JPEG", // format
            100, // quality
            0, // rotation
            (uri) => {
                setCover(uri);
            },
            "base64"
        );
    }

    if (!dataPending && !error && responseData) {
        console.log('new song :)');
        setIsPending(false);
        navigate('/');
    }

    return (
        <div className="upload-song">
            {cover && <img
                src={cover}
                alt="coverPreview"/>}
            <div className="drop-song">
                <h2>Drop your song !!!</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="upload-music-form">
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
                        required
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                    <label>Song cover:</label>
                    <input
                        type="file"
                        name="cover"
                        accept="image/jpeg,image/png"
                        onChange={(e) => {handleCoverUpload(e)}}
                    />
                    <label>MP3:</label>
                    <input
                        type="file"
                        name="audio"
                        accept="audio/mpeg"
                        onChange={(e => {setAudio(e.target.files[0])})}
                    />
                    {!isPending && (<button>Upload song</button>)}
                    {isPending && <button disabled>Uploading song...</button>}
                </form>
            </div>
        </div>
    );
};

export default UploadSong;
