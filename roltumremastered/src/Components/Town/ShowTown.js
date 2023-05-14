import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { displayTown } from "../../Services/Town";
import { TownCard } from "../Card/Card";
import HeaderMenu from "../Layout/Layout";
export function ShowTownList() {
    const [towns, setTowns] = useState([]);
    const { userId, campaignId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (userId && campaignId) {
            displayTown(userId, campaignId)
                .then(data => {
                    console.log("ShowTownList component: ", data);
                    setTowns(data || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId, campaignId]);
    const addTown = () => {
        navigate(`/addTowns/${userId}/${campaignId}`);
    };
    return (
        <div>
            <HeaderMenu />
            <button className="button" onClick={addTown}>Add new Town</button>
            <div className="list-container">
                {towns && towns.map(town => (
                    <TownCard key={town.id} town={town} />
                ))}
            </div>
        </div>
    );
}