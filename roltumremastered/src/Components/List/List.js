import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteMonster } from "../../Services/Monster";
import { deleteAdventurer } from "../../Services/Adventurer";
import "./List.css";
function MonsterList({ monster }) {
    const userID = sessionStorage.getItem("userId");
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);

    console.log("MonsterList component: ", monster);

    const viewSelectedMonster = () => {
        console.log("Viewing monster: ", monster);
        if (showDetails === false) {
            setShowDetails(true);
        } else {
            setShowDetails(false);
        }
    }
    const editSelectedMonster = () => {
        console.log("Editing monster: ", monster);
    }
    const deleteSelectedMonster = () => {
        console.log("Deleting monster: ", monster.id);
        deleteMonster(userID, monster.id);
    }
    return (
        <div className="list">
            <ul className="card-list">
                <li className="card">
                    <div className="image"></div>
                    <div className="details">
                        <div className="data">
                            <h2 className="name">Name: {monster.name}</h2>
                            <p className="info">Size: {monster.size}</p>
                            <p className="info">Type: {monster.type}</p>
                        </div>
                        <div className="button-container">
                            <button className="view-button" onClick={viewSelectedMonster}>View</button>
                            {/* <button className="edit-button" onClick={editSelectedMonster}>Edit</button> */}
                            <button className="delete-button" onClick={deleteSelectedMonster}>Delete</button>
                        </div>
                    </div>
                </li>
                {/* Agrega más elementos de la lista aquí */}
                {showDetails && (
                    <div className="adventurer-details">
                        <div className="adventurer-info">
                            <h2 className="name">{monster.name}</h2>
                            <p className="info">Description: {monster.description}</p>
                            <p className="info">Type: {monster.type}</p>
                            <p className="info">Challenge Rating: {monster.challengeRating}</p>
                            <p className="info">Armor class: {monster.armorClass}</p>
                        </div>

                        <div className="adventurer-stats">
                            <h3 className="stats-title">Stats</h3>
                            <ul className="stats-list">
                                <li><strong>Charisma:</strong> {monster.stats.charisma}</li>
                                <li><strong>Constitution:</strong> {monster.stats.constitution}</li>
                                <li><strong>Dexterity:</strong> {monster.stats.dexterity}</li>
                                <li><strong>Intelligence:</strong> {monster.stats.intelligence}</li>
                                <li><strong>Strength:</strong> {monster.stats.strength}</li>
                                <li><strong>Wisdom:</strong> {monster.stats.wisdom}</li>
                            </ul>
                        </div>

                        <div className="adventurer-weapon">
                            <h3 className="weapon-title">Weapon</h3>
                            <p><strong>Weapon name:</strong> {monster.weapon.name}</p>
                            <p><strong>Weapon type:</strong> {monster.weapon.type}</p>
                            <p><strong>Weapon damage:</strong> {monster.weapon.damage}</p>
                            <p><strong>Weapon damage type:</strong> {monster.weapon.damageType}</p>
                            <p><strong>Weapon properties:</strong> {monster.weapon.properties}</p>
                        </div>
                        <div className="adventurer-languages">
                            <h3 className="languages-title">Languages</h3>
                            <ul className="languages-list">
                                {monster.languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
}
function AdventurersList({ adventurer }) {
    const userID = sessionStorage.getItem("userId");
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);
    let number = 0;
    const viewSelectedAdventurer = () => {
        console.log("Viewing adventurer: ", adventurer);
        if (showDetails === false) {
            setShowDetails(true);
        } else {
            setShowDetails(false);
        }

    };
    const editSelectedAdventurer = () => {
        console.log("Editing adventurer: ", adventurer);
    };
    const deleteSelectedAdventurer = () => {
        console.log("Deleting adventurer: ", adventurer.id);
        deleteAdventurer(userID, adventurer.id);
    };

    return (
        <div className="list">
            <ul className="card-list">
                <li className="card">
                    <div className="image"></div>
                    <div className="details">
                        <div className="data">
                            <b><p className="name">Name: {adventurer.name}</p></b>
                            <p className="info"> Level: {adventurer.level} </p>
                            <p className="info"> Race: {adventurer.raceAdventurer}</p>
                            <p className="info"> Class: {adventurer.classAdventurer}</p>
                        </div>
                        <div className="button-container">
                            <button className="view-button" onClick={viewSelectedAdventurer}>View</button>
                            {/* <button className="edit-button" onClick={editSelectedAdventurer}>Edit</button> */}
                            <button className="delete-button" onClick={deleteSelectedAdventurer}>Delete</button>
                        </div>
                    </div>
                </li>
                {/* Agrega más elementos de la lista aquí */}
                {showDetails && (
                    <div className="adventurer-details">
                        <div className="adventurer-info">
                            <h2 className="name">{adventurer.name}</h2>
                            <p className="info">Race: {adventurer.raceAdventurer}</p>
                            <p className="info">Class: {adventurer.classAdventurer}</p>
                        </div>

                        <div className="adventurer-stats">
                            <h3 className="stats-title">Stats</h3>
                            <ul className="stats-list">
                                <li><strong>Charisma:</strong> {adventurer.stats.charisma}</li>
                                <li><strong>Constitution:</strong> {adventurer.stats.constitution}</li>
                                <li><strong>Dexterity:</strong> {adventurer.stats.dexterity}</li>
                                <li><strong>Intelligence:</strong> {adventurer.stats.intelligence}</li>
                                <li><strong>Strength:</strong> {adventurer.stats.strength}</li>
                                <li><strong>Wisdom:</strong> {adventurer.stats.wisdom}</li>
                            </ul>
                        </div>

                        <div className="adventurer-weapon">
                            <h3 className="weapon-title">Arma</h3>
                            <p><strong>Weapon name:</strong> {adventurer.weapon.name}</p>
                            <p><strong>Weapon type:</strong> {adventurer.weapon.type}</p>
                            <p><strong>Weapon damage:</strong> {adventurer.weapon.damage}</p>
                            <p><strong>Weapon damage type:</strong> {adventurer.weapon.damageType}</p>
                            <p><strong>Weapon properties:</strong> {adventurer.weapon.properties}</p>
                        </div>

                        <div className="adventurer-inventory">
                            <h3 className="inventory-title">Inventory</h3>
                            <ul className="inventory-list">
                                {adventurer.inventory.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="adventurer-money">
                            <h3 className="money-title">Coins</h3>
                            <p><strong>Copper:</strong> {adventurer.money.copperCoin}</p>
                            <p><strong>Gold:</strong> {adventurer.money.goldCoin}</p>
                            <p><strong>Silver:</strong> {adventurer.money.silverCoin}</p>
                        </div>

                        <div className="adventurer-languages">
                            <h3 className="languages-title">Languages</h3>
                            <ul className="languages-list">
                                {adventurer.languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    )
}
export { MonsterList, AdventurersList };