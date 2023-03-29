import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [blog_id, setBlog_id] = useState(null)
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {blog_id, title, body, author, date};

        setIsPending(true)
        fetch(`http://localhost:8080/blog`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog :)");
            setIsPending(false);
            navigate('/');
        })
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
                    value = {body}
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