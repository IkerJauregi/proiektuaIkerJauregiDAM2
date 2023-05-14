import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createItem } from "../../../Services/Item";

export function InsertItem() {
    const userID = sessionStorage.getItem("userId");
    const { campaignId } = useParams();
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [itemClass, setClass] = useState("");
    const [itemStats, setStats] = useState("");
    const [curseName, setCurseName] = useState("");
    const [curseDescription, setCurseDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("itemName", name);
            params.append("itemDescription", description);
            params.append("itemClass", itemClass);
            params.append("itemStats", itemStats);
            params.append("curseName", curseName);
            params.append("curseDescription", curseDescription);
            await createItem(userID, campaignId, params.toString());
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
                Class:
                <input type="text" value={itemClass} onChange={(event) => setClass(event.target.value)} />
            </label>
            <label>
                Stats:
                <input type="text" value={itemStats} onChange={(event) => setStats(event.target.value)} />
            </label>
            <label>
                Curse Name:
                <input type="text" value={curseName} onChange={(event) => setCurseName(event.target.value)} />
            </label>
            <label>
                Curse Description:
                <input type="text" value={curseDescription} onChange={(event) => setCurseDescription(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}