import React, { useState, useEffect } from 'react';
import { Home, Posts, Register } from "./components";
import { Route, Switch, Link } from "react-router-dom";
import { fetchPosts } from './api/api';

const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await fetchPosts();
                setPosts(result);
                console.log(result)
            } catch(error) {
                console.error("There was an error fetching posts", error);
            }
        };
        getPosts();
    }, []);

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Posts">Posts</Link>
                <Link to="/Register">Log In</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Posts">
                    <Posts posts={posts}/>
                </Route>
                <Route path="/Register">
                    <Register></Register>
                </Route>
            </Switch>
        </div>
    );
};

export default App;