import HeaderMenu from "../Layout/Layout";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayMonster } from "../../Services/Monster";
import MonsterList from "../List/List";

function ShowMonsterList() {
  const [monsters, setMonsters] = useState([]);
  // userId is a parameter in the URL put there by the <Route> in src\index.js so the name must match
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      displayMonster(userId)
        .then(data => {
          console.log("ShowMonsterList component: ", data);
          setMonsters(data.monsters || []);
        })
        .catch(error => console.log(error));
    }
  }, [userId]);

  return (
    <div>
      <HeaderMenu />
      <div className="list-container">
        {monsters && monsters.map(monster => (
          <MonsterList key={monster.id} monster={monster} />
        ))}
        <button className="button">Add new Monster</button>
      </div>
    </div>
  );
}

export default ShowMonsterList;
