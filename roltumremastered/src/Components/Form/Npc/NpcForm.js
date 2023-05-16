import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createNPC } from "../../../Services/Npc";
import "./NpcForm.css";
export function InsertNpc() {
    const navigate = useNavigate();
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
            navigate(`/npcs/${userID}/${campaignId}`);
            alert("NPC created successfully!");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div id="form-containerNpc">
            <form id="formNpc" onSubmit={handleSubmit}>
                <h1>Create NPC</h1>
                <div id="idContainer">
                    <label for="userId">UID:</label>
                    <input id="smallInput" type="text" disabled value={userID} />
                    <label for="campaignId">CID:</label>
                    <input id="smallInput" type="text" disabled value={campaignId} />
                </div>
                <div id="editableContainer">
                    <input id="normalInput" type="text" placeholder="Name" value={name} required onChange={(event) => setName(event.target.value)} />
                    <input id="normalInput" type="text" placeholder="Description" value={description} required onChange={(event) => setDescription(event.target.value)} />
                    <input id="normalInput" type="text" placeholder="Inventory" value={inventory} required onChange={(event) => setInventory(event.target.value)} />
                    <input id="normalInput" type="text" placeholder="Tags" value={tags} required onChange={(event) => setTags(event.target.value)} />
                    <input id="submitButton" type="submit" value="Submit" />
                    <a href={`/npcs/${userID}/${campaignId}`}>Go back</a>
                </div>
            </form>
        </div>
    );
}