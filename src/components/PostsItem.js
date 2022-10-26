import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({post}) => {
    
    return (
    <div>
        <div>
            <div>{post.title}</div>
            <div>Author:{post.author.username}</div>
            <div>Price:{post.price}</div>
            <div>Description:{post.description}</div>
            <div>Location:{post.location}</div>
            <Link to="">View Post</Link>
        </div>
    </div>
    )
};

export default PostsItem;