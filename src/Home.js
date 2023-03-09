import React, {useState} from 'react';


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
    return (
        <div className="home">
            <h1>Homepage :)</h1>
            <p> Johmen is my {fav} artist/programmer !!</p>
            <button onClick={() => handleFavClick()}></button>
            {blogs.map((blog) => (
                <div className="blogPreview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>By {blog.author}</p>
                </div>
            ))}

        </div>
    );
};

export default Home;