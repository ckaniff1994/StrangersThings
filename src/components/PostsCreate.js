import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/api";


const PostsCreate = ({token, setPosts}) => { 
    
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState("");

    return(<form onSubmit={async (event) => {
        event.preventDefault();

        const {error, post} = await createPost(token, title, description, location, price, willDeliver)

        if (post) {
            setPosts((prevPosts) => [...prevPosts, post]);
            setDescription('');
        } else {
            console.error(error)
        }
///////FINISH THE REST OF STATE///////
        
    }}>
        <h4>Create a Post</h4>
        
        <div>
            <label htmlFor="description">Description</label>
            <input
                onChange={event => {setDescription(event.target.value)}}
                value={description} 
                type="text" 
                placeholder="Quick description of post"
                required></input>
        </div>

        <button type="submit">Create</button>
    </form>)
}

export default PostsCreate;