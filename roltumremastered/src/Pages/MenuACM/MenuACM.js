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
            <div className="containerAcm">
                <div className="left-sectionAcm">
                    <button className="section-button" onClick={() => handleSeeAdventurers(idUser)}>Adventurers</button>
                </div>
                <div className="middle-sectionAcm">
                    <button className="section-button" onClick={() => handleSeeCampaigns(idUser)}>Campaigns</button>
                </div>
                <div className="right-sectionAcm">
                    <button className="section-button" onClick={() => handleSeeMonsters(idUser)}>Monsters</button>
                </div>
            </div>
        </div>
    );
}

export default MenuACM;
