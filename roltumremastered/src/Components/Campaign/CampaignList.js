import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayCampaign } from "../../Services/Campaign";
import { Card } from "../../Components/Card/Card";
import HeaderMenu from "../Layout/Layout";
import "./CampaignList.css";
function CampaignList() {
    const [campaigns, setCampaigns] = useState([]);
    // userId is a parameter in the URL put there by the <Route> in src\index.js so the name must match
    const { userId } = useParams();

    useEffect(() => {
        if (userId) { // Verificación de userId no undefined
            displayCampaign(userId)
                .then(data => {
                    setCampaigns(data.campaigns || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId]);

    return (
        <div>
            <HeaderMenu />
            <div className="list-container">
                {campaigns && campaigns.map(campaign => (
                    <Card key={campaign.id} campaign={campaign} />
                ))}
                <button className="button">Add new Campaign</button>
            </div>
        </div>
    );
}

export default CampaignList;
