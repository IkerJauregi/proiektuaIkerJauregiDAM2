import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createNPC } from "../../../Services/Npc";

export function InsertNpc() {
    const userID = sessionStorage.getItem("userId");
    const { campaignId } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [inventory, setInventory] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("npcName", name);
            params.append("npcDescription", description);
            params.append("npcInventory", inventory);
            params.append("npcTags", tags);
            await createNPC(userID, campaignId, params.toString());
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
                Inventory:
                <input type="text" value={inventory} onChange={(event) => setInventory(event.target.value)} />
            </label>
            <label>
                Tags:
                <input type="text" value={tags} onChange={(event) => setTags(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}