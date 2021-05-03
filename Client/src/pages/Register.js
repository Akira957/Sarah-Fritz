import React, { useState } from "react";
import "./register.css";

function Register() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setUser(oldState => ({ ...oldState, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("create new user!!");
    }

    const { email, password } = user;

    return (
        <div className="container">
            <h2>Register</h2>
            <form>
                <input name="email" onChange={handleChange} value={email} placeholder="Email" />
                <input name="password" onChange={handleChange} value={password} placeholder="Password" />
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Register;