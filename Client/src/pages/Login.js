import React, { useState } from "react";
import "./login.css";

function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleLogin = event => {
        const { name, value } = event.target;

        setUser(oldState => ({ ...oldState, [name]: value }));
    };

    const { email, password } = user;

    return (
        <div className="container">
            <h2>Sign In</h2>
            <form>
                <input name="email" onChange={handleLogin} value={email} placeholder="Email" />
                <input name="password" onChange={handleLogin} value={password} placeholder="Password" />
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Login;