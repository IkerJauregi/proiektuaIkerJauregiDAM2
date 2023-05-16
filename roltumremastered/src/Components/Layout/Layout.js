import React from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.css";
function HeaderMenu(props) {
  const navigate = useNavigate();
    const logOut = () => {
      localStorage.removeItem("token");
      navigate("/");
    };
    return (
      <nav className="app-header">
        <h1>Roltum</h1>
        <button className="logout-btn" onClick={logOut}>Log out</button>
      </nav>
    );
  }
export default HeaderMenu;