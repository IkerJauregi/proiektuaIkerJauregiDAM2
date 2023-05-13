import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { displayAdventurer } from '../../Services/Adventurer';
import { Card, AdventurerCard } from '../Card/Card';
import HeaderMenu from '../Layout/Layout';
import './ShowAdventurerList.css';

export default function AdventurerList() {
    const [adventurers, setAdventurers] = useState([]);
    // userId is a parameter in the URL put there by the <Route> in src\index.js so the name must match
    const { userId } = useParams();

    useEffect(() => {
        if (userId) {
            displayAdventurer(userId)
                .then(data => {
                    setAdventurers(data.adventurers || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId]);

    return (
        <div>
            <HeaderMenu />
            <div className="list-container">
                {adventurers && adventurers.map(adventurer => (
                    <AdventurerCard key={adventurer.id} adventurer={adventurer} />
                ))}
                <button className="button">Add new Adventurer</button>
            </div>
        </div>
    );
}
export { AdventurerList };