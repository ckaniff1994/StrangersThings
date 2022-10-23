import React from 'react';

const LogIn = () => {
    return (
        <form>
            <label>
                Username:
                <input type="text" username="username" />
            </label>
            <label>
                Password:
                <input type="text" password="password" />
            </label>
        </form>
    )

}

export default LogIn;