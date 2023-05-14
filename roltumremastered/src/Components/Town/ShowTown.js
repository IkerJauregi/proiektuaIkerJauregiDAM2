import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayTown } from "../../Services/Town";
import { TownCard } from "../Card/Card";
import HeaderMenu from "../Layout/Layout";
export function ShowTownList() {
    const [towns, setTowns] = useState([]);
    const { userId, campaignId } = useParams();

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

    return (
        <div>
            <HeaderMenu />
            <button className="button">Add new Town</button>
            <div className="list-container">
                {towns && towns.map(town => (
                    <TownCard key={town.id} town={town} />
                ))}
            </div>
        </div>
    );
}