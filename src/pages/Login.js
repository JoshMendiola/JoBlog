import React, {useState} from 'react';
import {Form, Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <div>
            <h2>Login</h2>
            <form className="login-form">
                <label>Email:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <Link to="/register" style={{color:"blue"
            }}>Dont have an account?</Link>
        </div>
    );
};

export default Login;