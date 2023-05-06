import React, { useState } from "react";
import "./form.css";
import { loginUser } from "../../Services/User";
import { useNavigate } from "react-router-dom";
import { displayCampaign } from "../../Services/Campaign";

// We clear the session storage on login
// sessionStorage.clear()

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
          console.log("id:", id + " name:", name);
          sessionStorage.setItem("userId", id);
          sessionStorage.setItem("userName", name);
          console.log("sessionStorage:", sessionStorage);
          navigate(`/menu-acm`);
          // displayCampaign(response.id)
          // navigate(`/campaigns/${response.id}`)
          return response;
        })
        .catch((error) => {
          console.error("Login failed:", error);
          throw error;
        });
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate("/register");
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className="login-error">{error}</p>}
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
        <a href="/register" onClick={handleCreateAccount}>Create an account</a>
      </form>
    </div>
  );
}

export default Login;
