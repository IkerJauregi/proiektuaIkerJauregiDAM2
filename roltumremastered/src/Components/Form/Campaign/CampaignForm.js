import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCampaign } from "../../../Services/Campaign";
import "../form.css";

export function InsertCampaign() {
    const userID = sessionStorage.getItem("userId");
    // const { userId } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("campaignName", name);
            params.append("campaignDescription", description);
            await createCampaign(userID, params.toString());
            navigate(`/campaigns/${userID}`);
        } catch (error) {
            console.log(error);
        }
    };
    const goBack = (event) => {
        event.preventDefault();
        navigate(`/campaigns/${userID}`);
    };
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Add Campaign</h1>
                <label className="label">
                    User ID:
                </label>
                <input className="input" type="text" disabled value={userID} />
                <input required className="input" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
                <input required type="text" className="input" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
                <input className="button" type="submit" value="Submit" />
                <a href="/campaigns" onClick={goBack}>Go back</a>
            </form>
        </div>
    );
}
