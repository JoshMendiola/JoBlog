import React, {useState} from 'react';

const Create = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author};

        setIsPending(true)
        fetch(`http://localhost:8000/blogs`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog :)");
            setIsPending(false);
            setBody('');
            setAuthor('')
            setTitle('')
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

export default Create;