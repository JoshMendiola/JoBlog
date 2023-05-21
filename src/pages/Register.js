import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [passwordOne, setPasswordOne] = useState()
    const [passwordTwo, setPasswordTwo] = useState()

    return (
        <div>
            <h2>Register</h2>
            <form className="login-form">
                <label>Email:</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Username:</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    required
                    value={passwordOne}
                    onChange={(e) => setPasswordOne(e.target.value)}
                />
                <label>Re-enter Password:</label>
                <input
                    type="password"
                    required
                    value={passwordTwo}
                    onChange={(e) => setPasswordTwo(e.target.value)}
                />
            </form>
            <Link to="/login" style={{color:"blue"
            }}>Already have an account?</Link>
        </div>
    );
};

export default Register;