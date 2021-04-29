import React, { useState } from "react";

function Register() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setUser(oldState => ({ ...oldState, [name]: value }));
    };

    const { email, password } = user;

    return (
        <div className="container">
            <h2>Register</h2>
            <form>
                <input name="email" onChange={handleChange} value={email} placeholder="Email" />
                <input name="password" onChange={handleChange} value={password} placeholder="Password" />
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Register;