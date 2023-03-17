import React, {useState, useEffect} from 'react';
import BlogList from "./BlogList";


const Home = () => {

    const [fav, setFav] = useState("Favorite")
    const [blogs, setBlogs] = useState(null)
    const [blogsPending, setBlogsPending] = useState(true)
    const [error, setError] = useState(null)
    const handleFavClick = () =>
    {
       if (fav === "Favorite")
       {
           setFav("Least Favorite")
       }
       else
       {
           setFav("Favorite")
       }
    }


    useEffect((() => {
        fetch(`http://localhost:8000/blogs`)
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Could not fetch that resource!')
                }
                return res.json()
            })
            .then((response) => {
                setBlogs(response);
                setBlogsPending(false);
                setError(null)})
            .catch(err => {
                setBlogsPending(false)
                setError(err.message)}
            )
        }
    ), [])
    return (
        <div className="home">
            <h1>Homepage :)</h1>
            <p> Johmen is my {fav} artist/programmer !!</p>
            <button onClick={() => handleFavClick()}></button>
            {error && <div><h1>{error}</h1></div>}
            {blogsPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
    );
};

export default Home;