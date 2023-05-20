import React, {useState} from 'react';
import {Form} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState(null)
    const [passwordOne, setPasswordOne] = useState(null)
    const [passwordTwo, setPasswordTwo] = useState(null)

    return (
        <div>
            <form className="login-form">
                <label>Username:</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={passwordOne}
                    onChange={(e) => setPasswordOne(e.target.value)}
                />
                <label>Re-enter password</label>
                <input
                    type="password"
                    required
                    value={passwordTwo}
                    onChange={(e) => setPasswordTwo(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Login;