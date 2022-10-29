import React, {useState} from 'react';
import { fetchRegister } from '../api/api';
import {useParams, useHistory} from 'react-router-dom';

const AccountForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {action} = useParams();
    const history = useHistory();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const {error, token, message} = await fetchRegister(username, password);
            
        console.error(error);

        setToken(token);

        if (token) {
            history.push("/");
        }
    };

    const title = action === "LogIn" ? "Log In" : "Sign Up";

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>{title}</h1>
            <div>
                <label>Username:</label>
                    <input 
                    type="text" 
                    value={username} 
                    placeholder="Username" 
                    required
                    onChange={(event) => {setUsername(event.target.value)}} 
                    />
            </div>
            <div>
                <label>Password:</label>
                    <input 
                    type="password" 
                    value={password} 
                    placeholder="Password"
                    minLength="8"
                    required
                    onChange={(event) => {setPassword(event.target.value)}}
                    />
            </div>
            <button type="submit">
                {title}
            </button>
        </form>
    )

}

export default AccountForm;