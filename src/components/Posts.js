import React, {useEffect, useState} from "react";
import PostsItem from "./PostsItem";


const Posts = ({posts}) => {
    console.log(posts)
    return (
    <div>
        {posts.map((post) => {
            // console.log("hi", post)
            return <PostsItem key={post._id} post={post}/>
        })}
    </div>
    );
};

export default Posts;