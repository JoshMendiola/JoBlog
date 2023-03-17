import React from 'react';

function BlogList(props) {
    return (
        <div className="blogList">
        {props.blogs.map((blog) => (
                <div className="blogPreview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>By {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList;