import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { selectedAdventurer } from "../../Services/Adventurer";
export function AdventurerSheet() {
    const [adventurer, setAdventurer] = useState([]);
    const { userId, adventurerId } = useParams();
    console.log("Fuera useeffect: ", userId, adventurerId);

    useEffect(() => {
        console.log("Dentro useeffect: ", userId, adventurerId);
        if (userId && adventurerId) {
            selectedAdventurer(userId, adventurerId)
                .then(data => {
                    setAdventurer(data.adventurer || []);
                })
                .catch(error => console.log(error));
        }
    }, [userId, adventurerId]);

    console.log("AdventurerSheet: ", adventurer);
    return (
        <div>
            <h2>{adventurer.name}</h2>
            <div>
                <h3>Stats</h3>
                <div>
                    <span>Strength:</span>
                    <span>{adventurer.stats.strength}</span>
                </div>
                <div>
                    <span>Dexterity:</span>
                    <span>{adventurer.stats.dexterity}</span>
                </div>
                <div>
                    <span>Constitution:</span>
                    <span>{adventurer.stats.constitution}</span>
                </div>
                <div>
                    <span>Intelligence:</span>
                    <span>{adventurer.stats.intelligence}</span>
                </div>
                <div>
                    <span>Wisdom:</span>
                    <span>{adventurer.stats.wisdom}</span>
                </div>
                <div>
                    <span>Charisma:</span>
                    <span>{adventurer.stats.charisma}</span>
                </div>
            </div>

            <div>
                <h3>Inventory</h3>
                <ul>
                    {adventurer.inventory.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Languages</h3>
                <ul>
                    {adventurer.languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Money</h3>
                <div>
                    <span>Copper:</span>
                    <span>{adventurer.money.copperCoin}</span>
                </div>
                <div>
                    <span>Silver:</span>
                    <span>{adventurer.money.silverCoin}</span>
                </div>
                <div>
                    <span>Gold:</span>
                    <span>{adventurer.money.goldCoin}</span>
                </div>
            </div>

            <div>
                <h3>Weapon</h3>
                <div>
                    <span>Name:</span>
                    <span>{adventurer.weapon.name}</span>
                </div>
                <div>
                    <span>Damage:</span>
                    <span>{adventurer.weapon.damage}</span>
                </div>
                <div>
                    <span>Damage Type:</span>
                    <span>{adventurer.weapon.damageType}</span>
                </div>
                <div>
                    <span>Properties:</span>
                    <span>{adventurer.weapon.properties}</span>
                </div>
                <div>
                    <span>Type:</span>
                    <span>{adventurer.weapon.type}</span>
                </div>
            </div>
        </div>
    );
}

export function ShowAdventurerSheet(){
    
}