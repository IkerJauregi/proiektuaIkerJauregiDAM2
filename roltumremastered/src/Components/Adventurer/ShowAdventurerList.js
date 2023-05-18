import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { displayAdventurer } from '../../Services/Adventurer';
import { Card, AdventurerCard } from '../Card/Card';
import { AdventurersList } from '../List/List';
import HeaderMenu from '../Layout/Layout';

export default function AdventurerList() {
    const [adventurers, setAdventurers] = useState([]);
    // userId is a parameter in the URL put there by the <Route> in src\index.js so the name must match
    const { userId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (userId) {
            displayAdventurer(userId)
                .then(data => {
                    setAdventurers(data.adventurers || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId]);

    const addAdventurer = () => {
        console.log("Adding new adventurer");
        navigate(`/addAdventurers/${userId}`);
    };
    return (
        <div>
            <HeaderMenu />
            <button className="button" onClick={addAdventurer}>Add new Adventurer</button>
            <div className="list-container">
                {adventurers && adventurers.map(adventurer => (
                    <AdventurersList key={adventurer.id} adventurer={adventurer} />
                ))}
            </div>
        </div>
    );
}
export { AdventurerList };