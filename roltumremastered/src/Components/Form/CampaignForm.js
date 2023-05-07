import React, { useState, useEffect } from "react";
import { updateCampaign } from "../../Services/Campaign";
function CampaignUpdateForm({ campaignId, campaignName, campaignDescription }) {
    const userID = sessionStorage.getItem("userId");

    const [name, setName] = useState(campaignName);
    const [description, setDescription] = useState(campaignDescription);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await updateCampaign(userID, campaignId, name, description);
            // Show success message or redirect to another page
        } catch (error) {
            // Show error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User ID:
                <input type="text" disabled value={userID} />
            </label>
            <br />
            <label>
                Campaign ID:
                <input type="text" readOnly value={campaignId} />
            </label>
            <br />
            <label>
                Campaign Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Campaign Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <button type="submit">Update Campaign</button>
        </form>
    );
}

export { CampaignUpdateForm };
