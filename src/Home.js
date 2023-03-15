import React, {useState, useEffect} from 'react';
import BlogList from "./BlogList";


const Home = () => {

    const [fav, setFav] = useState("Favorite")
    const [blogs, setBlogs] = useState([
        {title: "Blog 1", body: "Blog 1 Body", author:"Joshua Mendiola", id: 1},
        {title: "Blog 2", body: "Blog 2 Body", author:"Joshua Mendiola", id: 2},
        {title: "Blog 3", body: "Blog 3 Body", author:"Joshua Mendiola", id: 3}
    ])
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

    const handleDelete = (id) =>
    {
        const newBlogs = blogs.filter(blog => blog.id != id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("use effect works")
        }
    )
    return (
        <div className="home">
            <h1>Homepage :)</h1>
            <p> Johmen is my {fav} artist/programmer !!</p>
            <button onClick={() => handleFavClick()}></button>
            <BlogList blogs={blogs} handleDelete = {handleDelete}/>
        </div>
    );
};

export default Home;