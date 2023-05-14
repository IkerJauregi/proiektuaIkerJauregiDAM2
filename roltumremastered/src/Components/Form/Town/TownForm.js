import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createTown } from "../../../Services/Town";

export function InsertTown() {
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
            <input type="submit" value="Submit" />
        </form>
    );
}