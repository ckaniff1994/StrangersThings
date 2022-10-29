import React, { useState, useEffect } from 'react';
import { Home, Posts, AccountForm, PostsCreate } from "./components";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { fetchPosts, fetchGuest} from './api/api';

const App = () => {

    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(
        window.localStorage.getItem("token") || null
        );
    const [username, setUsername] = useState(null);

    const history = useHistory()
    
    useEffect(() => {
        const getPosts = async () => {
                const {error, posts} = await fetchPosts();

                if (error) {
                    console.error(error);
                }
                setPosts(posts);
            }
        getPosts();
    }, []);

    useEffect(() => {
        if (token) {
            console.log(token)
            const getGuest = async () => {
                const {username} = await fetchGuest(token);
                console.log("RESULT", username)
                setUsername(username);
                console.log("USERNAME", username);
            };
            getGuest();
        }
    }, [token])

    useEffect(() => {
        if (token) {
        window.localStorage.setItem("token", token)
        } else {
          window.localStorage.removeItem("token")  
        }
    }, [token])

    const logOut = () => {
        setToken(null);
        setGuest(null);
        history.push('/')
    }

    return (
        <div>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/Posts">
                    Posts
                </Link>
                <div>
                    {token ? (
                        <button onClick={(event) => {
                            event.preventDefault();
                            logOut();
                        }}>Log Out</button>
                    ):(
                    <>
                        <Link to="/AccountForm/login">
                            Log In
                        </Link>
                        <Link to="/AccountForm/register">
                            Sign Up
                        </Link>
                    </>
                    )}
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home username={username}/>
                </Route>
                <Route path="/Posts/create">
                    <PostsCreate token={token} setPosts={setPosts} />
                </Route>
                <Route path="/Posts">
                    <Posts posts={posts}/>
                </Route>
                <Route path="/AccountForm/:action">
                    <AccountForm setToken={setToken}/>
                </Route>
            </Switch>
        </div>
    );
};

export default App;