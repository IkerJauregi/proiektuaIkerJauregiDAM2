import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteMonster } from "../../Services/Monster";
import "./List.css";
function MonsterList({ monster }) {
    const userID = sessionStorage.getItem("userId");
    const navigate = useNavigate();
    console.log("MonsterList component: ", monster);
    
    const viewSelectedMonster = () => {
        console.log("Viewing monster: ", monster);
    }
    const editSelectedMonster = () => {
        console.log("Editing monster: ", monster);
    }
    const deleteSelectedMonster = () => {
        console.log("Deleting monster: ", monster.id);
        deleteMonster(userID, monster.id);
    }
    return (
        <div className="monster-list">
            <h1 className="title">Monster List</h1>
            <div className="monster-card">
                <div className="monster-image"></div>
                <div className="monster-details">
                    <h2 className="monster-name">Name: {monster.name}</h2>
                    <p className="monster-info">Tamaño: {monster.size}</p>
                    <p className="monster-info">Tipo: {monster.type}</p>
                </div>
            </div>
        </div>
    );
}

export default MonsterList;