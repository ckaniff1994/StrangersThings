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
            setTitle('');
            setPrice('');
            setLocation('');
            setWillDeliver('');
        } else {
            console.error(error)
        }
///////FINISH THE REST OF STATE///////
        
    }}>
        <h4>Create a Post</h4>
        <div>
            <label htmlFor="title">Title</label>
            <input
                onChange={event => {setTitle(event.target.value)}}
                value={title}
                type="text"
                placeholder="Title your post"
                required></input>
        </div>
        
        <div>
            <label htmlFor="description">Description</label>
            <input
                onChange={event => {setDescription(event.target.value)}}
                value={description} 
                type="text" 
                placeholder="Quick description of post"
                required></input>
        </div>

        <div>
            <label htmlFor="price">Price</label>
            <input
                onChange={event => {setPrice(event.target.value)}}
                value={price}
                type="text"
                placeholder="Name your price"
                required></input>
        </div>

        <div>
            <label htmlFor="location">Location</label>
            <input
                value={location}
                type="text"
                placeholder="Where are you?"
                onChange={event => {setLocation(event.target.value)}}></input>
        </div>

        <div>
            <label htmlFor="willDeliver">Pick up or Delivery?</label>
            <input
                value={willDeliver}
                type="text"
                placeholder="Yes or No"
                required
                onChange={event => {setWillDeliver(event.target.value)}}></input>
        </div>

        <button type="submit">Create</button>
    </form>)
}

export default PostsCreate;