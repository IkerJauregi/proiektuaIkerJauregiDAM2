import React, { useContext, useState } from "react";
import "./MenuINQT.css";
import { useNavigate, useParams } from "react-router-dom";
import HeaderMenu from "../../Components/Layout/Layout";
export default function MenuINQT() {
    const navigate = useNavigate();
    const { userId, campaignId } = useParams();

    const handleSeeNPCs = (userId, campaignId) => {
        navigate(`/npcs/${userId}/${campaignId}`);
    };
    const handleSeeTowns = (userId, campaignId) => {
        navigate(`/towns/${userId}/${campaignId}`);
    };
    const handleSeeQuests = (userId, campaignId) => {
        navigate(`/quests/${userId}/${campaignId}`);
    };
    const handleSeeItems = (userId, campaignId) => {
        navigate(`/items/${userId}/${campaignId}`);
    };
    return (
        <div>
            <HeaderMenu />
            <div className="container">
                <div className="leftTop-section">
                    <h2 className="section-title">NPC</h2>
                    <button className="section-button" onClick={() => handleSeeNPCs(userId, campaignId)}>Ver más</button>
                </div>
                <div className="rightTop-section">
                    <h2 className="section-title">Town</h2>
                    <button className="section-button" onClick={() => handleSeeTowns(userId, campaignId)}>Ver más</button>
                </div>
                <div className="leftBotton-section">
                    <h2 className="section-title">Quest</h2>
                    <button className="section-button" onClick={() => handleSeeQuests(userId, campaignId)}>Ver más</button>
                </div>
                <div className="rightBottom-section">
                    <h2 className="section-title">Item</h2>
                    <button className="section-button" onClick={() => handleSeeItems(userId, campaignId)}>Ver más</button>
                </div>
            </div>
        </div>
    );
}