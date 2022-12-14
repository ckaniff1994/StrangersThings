import React from "react";
import { Link } from "react-router-dom";

const Home = ({username}) => {

    
    return (
        <div id="home">

            <h1>Welcome to Stranger's Things!</h1>
            {username ? <h3>You are logged in as: {username}</h3> : ( 
            <div>
                <h2 id="homefont">Please <Link to="AccountForm/login">Log In</Link></h2>
                <h3 id="homefont">Not a Member? <Link to="AccountForm/register">Sign Up!</Link></h3>
            </div>)}
        </div>
    );
};

export default Home;