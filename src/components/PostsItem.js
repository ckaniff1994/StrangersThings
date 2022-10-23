import React from "react";

const PostsItem = ({post}) => {
    console.log("POSTITEM",post)
    return (
    <div>
        <div>
            <div>{post.title}</div>
            <div><p>Author:</p>{post.author.username}</div>
            <div><p>Price:</p>{post.price}</div>
            <div><p>Description:</p>{post.description}</div>
            <div><p>Location:</p>{post.location}</div>
        </div>
    </div>
    )
};

export default PostsItem;