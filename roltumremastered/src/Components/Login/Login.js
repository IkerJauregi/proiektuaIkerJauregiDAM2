import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../Services/User";
import { useNavigate } from "react-router-dom";
import { displayCampaign } from "../../Services/Campaign";

function Login() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the name and password, such as calling a login function
    if (name === "" || password === "") {
      setError("Please enter a name and password");
    } else {
      loginUser(name, password)
        .then((response) => {
          // Lets display all the user campaigns and adventurers
          console.log("Login successful:", response);
          const { id, name } = response;
          sessionStorage.setItem("userId", id);
          sessionStorage.setItem("userName", name);
          navigate(`/menu-acm`);
          // displayCampaign(response.id)
          // navigate(`/campaigns/${response.id}`)
          return response;
        })
        .catch((error) => {
          console.error('Login failed:', error);
          throw error;
        });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className="login-error">{error}</p>}
        <input
          className="login-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
