import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [audio, setAudio] = useState('')
    const [song_id, setSong_id] = useState(null)
    const [about, setAbout] = useState('')
    const [cover, setCover] = useState('')
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const song = {song_id, title, author, date, about, audio, cover};

        setIsPending(true)
        fetch(`http://localhost:8080/blog`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(song)
        }).then(() => {
            console.log("new song !!!");
            setIsPending(false);
            navigate('/');
        })
    }

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
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>About your song: </label>
                <input
                    type="text"
                    required
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
                {!isPending && <button> Upload song </button>}
                {isPending && <button disabled> Uploading...</button>}
            </form>
        </div>
    );
};

export default CreateBlog;