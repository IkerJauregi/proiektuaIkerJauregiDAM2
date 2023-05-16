import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createTown } from "../../../Services/Town";
import "../form.css";
export function InsertTown() {
    const navigate = useNavigate();
    const userID = sessionStorage.getItem("userId");
    const { campaignId } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("townName", name);
            params.append("townDescription", description);
            await createTown(userID, campaignId, params.toString());
            navigate(`/towns/${userID}/${campaignId}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div id="form-containerNpc">
            <form id="formNpc" onSubmit={handleSubmit}>
                <h1>Create Town</h1>
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
                    <input id="normalInput" type="text" value={name} placeholder="Name" required onChange={(event) => setName(event.target.value)} />
                    <input id="normalInput" type="text" value={description} placeholder="Description" required onChange={(event) => setDescription(event.target.value)} />
                    <input id="submitButton" type="submit" value="Submit" />
                    <a href={`/towns/${userID}/${campaignId}`}>Go back</a>
                </div>
            </form>
        </div>
    );
}