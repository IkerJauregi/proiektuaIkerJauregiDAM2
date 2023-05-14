import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayNpcs } from "../../Services/Npc";
import { NpcCard } from "../Card/Card";
import HeaderMenu from "../Layout/Layout";
function ShowNpcList() {
    const [npcs, setNpcs] = useState([]);
    const { userId, campaignId } = useParams();

    useEffect(() => {
        if (userId && campaignId) {
            displayNpcs(userId, campaignId)
                .then(data => {
                    console.log("ShowNpcList component: ", data);
                    setNpcs(data || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId, campaignId]);

    return (
        <div>
            <HeaderMenu />
            <button className="button">Add new NPC</button>
            <div className="list-container">
                {npcs && npcs.map(npc => (
                    <NpcCard key={npc.id} npc={npc} />
                ))}
            </div>
        </div>
    );
}
export default ShowNpcList;