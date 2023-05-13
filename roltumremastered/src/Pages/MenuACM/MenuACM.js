import React, { useContext, useState } from "react";
import "./MenuACM.css";
import { useNavigate } from "react-router-dom";
import { displayCampaign } from "../../Services/Campaign";
import HeaderMenu from "../../Components/Layout/Layout";

function MenuACM() {
    const navigate = useNavigate();
    const idUser = sessionStorage.getItem("userId");

    const handleSeeCampaigns = (idUser) => {
        displayCampaign(idUser)
            .then(() => {
                navigate(`/campaigns/${idUser}`);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleSeeAdventurers = (idUser) => {
        navigate(`/adventurers/${idUser}`);
    };
    const handleSeeMonsters = (idUser) => {
        navigate(`/monsters/${idUser}`);
    };

    return (
        <div>
            <HeaderMenu />
            <div className="container">
                <div className="left-section">
                    <h2 className="section-title">Aventureros</h2>
                    <button className="section-button" onClick={() => handleSeeAdventurers(idUser)}>Ver más</button>
                </div>
                <div className="middle-section">
                    <h2 className="section-title">Campañas</h2>
                    <button className="section-button" onClick={() => handleSeeCampaigns(idUser)}>Ver más</button>
                </div>
                <div className="right-section">
                    <h2 className="section-title">Monstruos</h2>
                    <button className="section-button" onClick={() => handleSeeMonsters(idUser)}>Ver más</button>
                </div>
            </div>
        </div>
    );
}

export default MenuACM;
