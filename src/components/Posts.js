import React, {useEffect, useState} from "react";
import PostsItem from "./PostsItem";
import {Link} from 'react-router-dom'


const Posts = ({posts}) => {
    console.log(posts)
    return (<>
    <Link to="/Posts/create">Create a Post</Link>
    <div>
        {posts.map((post) => {
            // console.log("hi", post)
            return <PostsItem key={post._id} post={post}/>
        })}
    </div>
    </>);
};

export default Posts;