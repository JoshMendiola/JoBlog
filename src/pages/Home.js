import React, {useState, useEffect} from 'react';
import BlogList from "../components/BlogList";
import useFetch from "../service/UseFetch";


const Home = () => {

    const [fav, setFav] = useState("Favorite")
    const {data: blogs, dataPending: blogsPending, error} = useFetch('http://localhost:8080/noauth/blogs')
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
            <h1>Home</h1>
            <p> Johmen is my {fav} artist/programmer !!</p>
            <button onClick={() => handleFavClick()}>Reverse!</button>
            {error && <div><h1>{error}</h1></div>}
            {blogsPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
    );
};

export default Home;