import React, {useState} from 'react';
import {Link} from "react-router-dom";
import loginUser from "../service/LoginUser";

const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        try {
        // Call the loginUser function
        const response = await loginUser(email, password);

        // At this point, the token is saved in the local storage,
        // so you could navigate the user to the home page or somewhere else
        console.log(response.data);

        // Redirect to home page (for example)
        // assuming you're using 'react-router-dom'
        // history.push('/home');

        }
        catch (error)
        {
            // Show some error message
            console.error("Login failed", error);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit} style="">
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
                <button type="submit">Login</button>
            </form>
            <Link to="/register" style={{color:"blue"
            }}>Dont have an account?</Link>
        </div>
    );
};

export default Login;