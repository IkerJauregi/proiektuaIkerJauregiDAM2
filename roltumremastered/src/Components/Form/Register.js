import React, { useState } from "react";
import "./form.css";
import { registerUser } from "../../Services/User";
import { useNavigate } from "react-router-dom";

function Register() {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    const [error, setError] = useState("");

    // Register a new user and navigate to the menu
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the name and password, such as calling a login function
        if (name === "" || password === "") {
            setError("Please enter a name and password");
        } else {
            registerUser(name, password)
                .then((response) => {
                    // Lets display all the user campaigns and adventurers
                    console.log("Register successful:", response);
                    const { id, name } = response;
                    console.log("id:", id + " name:", name);
                    navigate("/");
                    return response;
                })
                .catch((error) => {
                    console.error("Register failed:", error);
                    throw error;
                });
        }
    };
    // Navigate to login page
    const handleLoginAccount = (e) => {
        e.preventDefault();
        navigate("/");
    };
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="button" type="submit">
                    Submit
                </button>
                <a href="/login" onClick={handleLoginAccount}>Already have an account?</a>
            </form>
        </div>
    );
}

export default Register;