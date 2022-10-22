import React, {useEffect, useState} from "react";
import { fetchPosts } from "../api/api";


const Posts = (props) => {
    const {posts} = props;
    
    return (
        <div>
            <h1>
                Check out some stuff!
            </h1>
            {posts.map(post => {
                return <div key={post._id} className="post-list">{post.title}</div>
            })}

        </div>
    );
};

export default Posts;