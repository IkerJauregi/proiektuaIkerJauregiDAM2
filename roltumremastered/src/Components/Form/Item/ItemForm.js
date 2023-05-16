import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createItem } from "../../../Services/Item";
import "./ItemForm.css";

export function InsertItem() {
    const userID = sessionStorage.getItem("userId");
    const { campaignId } = useParams();
    const navigate = useNavigate();
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
            navigate(`/items/${userID}/${campaignId}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div id="form-containerItem">
            <form id="formItem" onSubmit={handleSubmit}>
                <h1>Create Item</h1>
                <div id="idContainer">
                    <label>UID:</label>
                    <input id="smallInput" type="text" disabled value={userID} />
                    <label>CID:</label>
                    <input id="smallInput" type="text" disabled value={campaignId} />
                </div>
                <div id="editableContainer">
                    <input id="normalInput" type="text" value={name} placeholder="Name" required onChange={(event) => setName(event.target.value)} />
                    <input id="normalInput" type="text" value={description} placeholder="Description" required onChange={(event) => setDescription(event.target.value)} />
                    <input id="normalInput" type="text" value={itemClass} placeholder="Class" required onChange={(event) => setClass(event.target.value)} />
                    <input id="normalInput" type="text" value={itemStats} placeholder="Stats" required onChange={(event) => setStats(event.target.value)} />
                    <input id="normalInput" type="text" value={curseName} placeholder="Curse name" required onChange={(event) => setCurseName(event.target.value)} />
                    <input id="normalInput" type="text" value={curseDescription} placeholder="Curse Description" required onChange={(event) => setCurseDescription(event.target.value)} />
                    <input id="submitButton" type="submit" value="Submit" />
                    <a href={`/items/${userID}/${campaignId}`}>Go back</a>
                </div>
            </form>
        </div>
    );
}