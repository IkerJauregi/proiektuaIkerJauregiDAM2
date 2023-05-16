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
        setShowDetails(true);
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
                            <p className="info">Tamaño: {monster.size}</p>
                            <p className="info">Tipo: {monster.type}</p>
                        </div>
                        <div className="button-container">
                            <button className="view-button" onClick={viewSelectedMonster}>View</button>
                            <button className="edit-button" onClick={editSelectedMonster}>Edit</button>
                            <button className="delete-button" onClick={deleteSelectedMonster}>Delete</button>
                        </div>
                    </div>
                </li>
                {/* Agrega más elementos de la lista aquí */}
                {showDetails && (
                    <div className="adventurer-details">
                    <div className="adventurer-info">
                        <h2 className="name">{monster.name}</h2>
                        <p className="description">Description: {monster.description}</p>
                        <p className="info">Type: {monster.type}</p>
                        <p className="info">Challenge Rating: {monster.challengeRating}</p>
                        <p className="info">Armor class: {monster.armorClass}</p>
                    </div>
                
                    <div className="adventurer-stats">
                        <h3 className="stats-title">Estadísticas</h3>
                        <ul className="stats-list">
                            <li><strong>Carisma:</strong> {monster.stats.charisma}</li>
                            <li><strong>Constitución:</strong> {monster.stats.constitution}</li>
                            <li><strong>Destreza:</strong> {monster.stats.dexterity}</li>
                            <li><strong>Inteligencia:</strong> {monster.stats.intelligence}</li>
                            <li><strong>Fuerza:</strong> {monster.stats.strength}</li>
                            <li><strong>Sabiduría:</strong> {monster.stats.wisdom}</li>
                        </ul>
                    </div>
                
                    <div className="adventurer-weapon">
                        <h3 className="weapon-title">Arma</h3>
                        <p><strong>Nombre:</strong> {monster.weapon.name}</p>
                        <p><strong>Tipo:</strong> {monster.weapon.type}</p>
                        <p><strong>Daño:</strong> {monster.weapon.damage}</p>
                        <p><strong>Tipo de daño:</strong> {monster.weapon.damageType}</p>
                        <p><strong>Propiedades:</strong> {monster.weapon.properties}</p>
                    </div>
                    <div className="adventurer-languages">
                        <h3 className="languages-title">Idiomas</h3>
                        <ul className="languages-list">
                            {monster.languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                
                    <button className="close-button" onClick={() => setShowDetails(false)}>Cerrar</button>
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

    const viewSelectedAdventurer = () => {
        console.log("Viewing adventurer: ", adventurer);
        setShowDetails(true);
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
                            <p className="info"> Tamaño: {adventurer.raceAdventurer}</p>
                            <p className="info"> Tipo: {adventurer.classAdventurer}</p>
                        </div>
                        <div className="button-container">
                            <button className="view-button" onClick={viewSelectedAdventurer}>View</button>
                            <button className="edit-button" onClick={editSelectedAdventurer}>Edit</button>
                            <button className="delete-button" onClick={deleteSelectedAdventurer}>Delete</button>
                        </div>
                    </div>
                </li>
                {/* Agrega más elementos de la lista aquí */}
                {showDetails && (
                    <div className="adventurer-details">
                        <div className="adventurer-info">
                            <h2 className="name">{adventurer.name}</h2>
                            <p className="info">Raza: {adventurer.raceAdventurer}</p>
                            <p className="info">Clase: {adventurer.classAdventurer}</p>
                        </div>

                        <div className="adventurer-stats">
                            <h3 className="stats-title">Estadísticas</h3>
                            <ul className="stats-list">
                                <li><strong>Carisma:</strong> {adventurer.stats.charisma}</li>
                                <li><strong>Constitución:</strong> {adventurer.stats.constitution}</li>
                                <li><strong>Destreza:</strong> {adventurer.stats.dexterity}</li>
                                <li><strong>Inteligencia:</strong> {adventurer.stats.intelligence}</li>
                                <li><strong>Fuerza:</strong> {adventurer.stats.strength}</li>
                                <li><strong>Sabiduría:</strong> {adventurer.stats.wisdom}</li>
                            </ul>
                        </div>

                        <div className="adventurer-weapon">
                            <h3 className="weapon-title">Arma</h3>
                            <p><strong>Nombre:</strong> {adventurer.weapon.name}</p>
                            <p><strong>Tipo:</strong> {adventurer.weapon.type}</p>
                            <p><strong>Daño:</strong> {adventurer.weapon.damage}</p>
                            <p><strong>Tipo de daño:</strong> {adventurer.weapon.damageType}</p>
                            <p><strong>Propiedades:</strong> {adventurer.weapon.properties}</p>
                        </div>

                        <div className="adventurer-inventory">
                            <h3 className="inventory-title">Inventario</h3>
                            <ul className="inventory-list">
                                {adventurer.inventory.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="adventurer-money">
                            <h3 className="money-title">Dinero</h3>
                            <p><strong>Cobre:</strong> {adventurer.money.copperCoin}</p>
                            <p><strong>Oro:</strong> {adventurer.money.goldCoin}</p>
                            <p><strong>Plata:</strong> {adventurer.money.silverCoin}</p>
                        </div>

                        <div className="adventurer-languages">
                            <h3 className="languages-title">Idiomas</h3>
                            <ul className="languages-list">
                                {adventurer.languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </div>

                        <button className="close-button" onClick={() => setShowDetails(false)}>Cerrar</button>
                    </div>
                )}
            </ul>
        </div>
    )
}
export { MonsterList, AdventurersList };