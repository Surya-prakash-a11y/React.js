import React from "react";
import './Layout.css';

function Login() {
    return (
        <div className="login">
            <h1 className="head">Login</h1>

            <div className="form-container">
                <label className="form">Username
                    <input type="text" placeholder="Username" />
                </label>
            </div>

            <div className="form-container">
                <label className="form">Email
                    <input type="email" placeholder="Email ID" />
                </label>
            </div>

            <div className="form-container">
                <label className="form">Password
                    <input type="password" placeholder="Password" />
                </label>
            </div>

            <div className="form-container">
                <label className="form">Re-enter Password
                    <input type="password" placeholder="Re-enter password" />
                </label>
            </div>

            <div className="submit-container">
                <button type="submit">Login</button>
            </div>
        </div>
    );
}

export default Login;
