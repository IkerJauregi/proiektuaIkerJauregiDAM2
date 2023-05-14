import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCampaign } from "../../../Services/Campaign";

export function InsertCampaign() {
    const userID = sessionStorage.getItem("userId");
    // const { userId } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("campaignName", name);
            params.append("campaignDescription", description);
            await createCampaign(userID, params.toString());
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                User ID:
                <input type="text" disabled value={userID} />
            </label>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
