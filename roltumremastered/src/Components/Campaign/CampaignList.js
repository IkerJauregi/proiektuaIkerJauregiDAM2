import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayCampaign } from "../../Services/Campaign";
import { Card } from "../../Components/Card/Card";

function CampaignList() {
    const [campaigns, setCampaigns] = useState([]);
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
            <h1>Campaigns</h1>
            <ul>
                {campaigns && campaigns.map(campaign => (
                    <Card key={campaign.id} campaign={campaign} />
                ))}
            </ul>
        </div>
    );
}

export default CampaignList;
