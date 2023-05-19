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
                    <button className="section-button" onClick={() => handleSeeNPCs(userId, campaignId)}>NPC</button>
                </div>
                <div className="rightTop-section">
                    <button className="section-button" onClick={() => handleSeeTowns(userId, campaignId)}>Town</button>
                </div>
                <div className="leftBottom-section">
                    <button className="section-button" onClick={() => handleSeeQuests(userId, campaignId)}>Quest</button>
                </div>
                <div className="rightBottom-section">
                    <button className="section-button" onClick={() => handleSeeItems(userId, campaignId)}>Item</button>
                </div>
            </div>
        </div>
    );
}