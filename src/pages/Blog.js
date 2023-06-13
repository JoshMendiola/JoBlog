import React from 'react';
import {useParams} from "react-router";
import useFetchAll from "../service/useFetch";
import backbutton from "../images/backbutton.png";
import {useNavigate} from "react-router-dom";

const Blog = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {data: blog, dataPending, error} = useFetchAll('http://localhost:8080/noauth/blog/'+id)
    return (
        <div className="blog-details">
            <button onClick={() => navigate(-1)}>
                <img src={backbutton} alt="backbutton" className= "back-button"/>
            </button>
            { dataPending && <div>Loading...</div> }
            { error && <div> {error} </div> }
            {blog && (
                <article>
                    <h1> {blog.title}</h1>
                    <p> By: {blog.author} </p>
                    <p> Date: {blog.date} </p>
                    <div>{blog.body}</div>
                </article>
            )
            }
        </div>
    );
};

export default Blog;