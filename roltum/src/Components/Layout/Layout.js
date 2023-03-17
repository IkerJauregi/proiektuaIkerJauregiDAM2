import React from "react";
import "./Layout.css";
function HeaderMenu(){
    return(
        <nav className="app-header">
            <h1>Roltum</h1>
            <button className="settings-btn">Ajustes</button>
        </nav>
    );
}
export default HeaderMenu;