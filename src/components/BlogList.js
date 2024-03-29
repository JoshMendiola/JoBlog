import React from 'react';
import {Link} from "react-router-dom";

function BlogList(props) {
    return (
        <div className="blogList">
        {props.blogs.map(blog => (
                <div className="blogPreview" key = {blog.blog_id}>
                    <Link to={`/blog/${blog.blog_id}`}>
                        <h2>{blog.title}</h2>
                        <p>By {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;