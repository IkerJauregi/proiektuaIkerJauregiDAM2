import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createQuest } from "../../../Services/Quest";

export function InsertQuest() {
    const userID = sessionStorage.getItem("userId");
    const { campaignId } = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [bounty, setBounty] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("questName", name);
            params.append("questDescription", description);
            params.append("questBounty", bounty);
            await createQuest(userID, campaignId, params.toString());
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
                Campaign ID:
                <input type="text" disabled value={campaignId} />
            </label>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            </label>
            <label>
                Bounty:
                <input type="text" value={bounty} onChange={(event) => setBounty(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}