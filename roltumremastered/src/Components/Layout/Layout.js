import React from "react";
import "./Layout.css";
function HeaderMenu(props) {
    return (
      <nav className="app-header">
        <h1>Roltum</h1>
        <h3>{props.userName}</h3> {/* aquí se muestra el nombre del usuario */}
        <button className="settings-btn">Ajustes</button>
      </nav>
    );
  }
export default HeaderMenu;