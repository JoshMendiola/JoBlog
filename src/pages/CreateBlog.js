import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsePost from "../service/usePost";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [blog_id, setBlog_id] = useState(null);
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    const [isPending, setIsPending] = useState(false);
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const { responseData, dataPending, error } = UsePost('http://localhost:8080/blog', {
        blog_id,
        title,
        author,
        body,
        date,
    }, submit);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        setSubmit(true);
    };

    if (!dataPending && !error && responseData) {
        console.log('new blog :)');
        setIsPending(false);
        navigate('/');
    }

    return (
        <div className="create">
            <h2>Add New Blog !!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button> Add Blog </button>}
                {isPending && <button disabled> Adding blog...</button>}
            </form>
        </div>
    );
};

export default CreateBlog;
