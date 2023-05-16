import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createQuest } from "../../../Services/Quest";
import "./QuestForm.css";
export function InsertQuest() {
    const userID = sessionStorage.getItem("userId");
    const { campaignId } = useParams();
    const navigate = useNavigate();
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
            navigate(`/quests/${userID}/${campaignId}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div id="form-containerQuest">
            <form id="formQuest" onSubmit={handleSubmit}>
                <h1>Create Quest</h1>
                <div id="idContainer">
                    <label>
                        UID:
                    </label>
                    <input id="smallInput" type="text" disabled value={userID} />
                    <label>
                        CID:
                    </label>
                    <input id="smallInput" type="text" disabled value={campaignId} />
                </div>
                <div id="editableContainer">
                    <input id="normalInput" type="text" placeholder="Name" value={name} required onChange={(event) => setName(event.target.value)} />
                    <input id="normalInput" type="text" placeholder="Description" value={description} required onChange={(event) => setDescription(event.target.value)} />
                    <input id="normalInput" type="text" placeholder="Bounty" value={bounty} required onChange={(event) => setBounty(event.target.value)} />
                    <input id="submitButton" type="submit" value="Submit" />
                    <a href={`/quests/${userID}/${campaignId}`}>Go back</a>
                </div>
            </form>
        </div>
    );
}