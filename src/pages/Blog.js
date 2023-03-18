import React from 'react';
import {useParams} from "react-router";
import useFetchAll from "../service/useFetch";

const Blog = () => {
    const {id} = useParams()

    const {data: blog, dataPending, error} = useFetchAll('http://localhost:8000/blogs/'+id)
    return (
        <div className="blog-details">
            { dataPending && <div>Loading...</div> }
            { error && <div> {error} </div> }
            {blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p> By: {blog.author} </p>
                    <div>{blog.body}</div>
                </article>
            )
            }
        </div>
    );
};

export default Blog;