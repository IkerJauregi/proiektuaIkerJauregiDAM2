import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { displayQuest } from "../../Services/Quest";
import { QuestCard } from "../Card/Card";
import HeaderMenu from "../Layout/Layout";
export function ShowQuestList() {
    const [quests, setQuests] = useState([]);
    const { userId, campaignId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (userId && campaignId) {
            displayQuest(userId, campaignId)
                .then(data => {
                    console.log("ShowQuestList component: ", data);
                    setQuests(data || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId, campaignId]);

    const addQuest = () => {
        console.log("Adding new Quest");
        navigate(`/addQuests/${userId}/${campaignId}`);
    };
        return (
            <div>
                <HeaderMenu />
                <button className="button" onClick={addQuest}>Add new Quest</button>
                <div className="list-container">
                    {quests && quests.map(quest => (
                        <QuestCard key={quest.id} quest={quest} />
                    ))}
                </div>
            </div>
        );
    }