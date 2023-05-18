import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createAdventurer } from "../../../Services/Adventurer";
import "./AdventurerForm.css";
export function InsertAdventurer() {
    const userID = sessionStorage.getItem("userId");
    const [name, setName] = useState("");
    const [classAdventurer, setClass] = useState("");
    const [raceAdventurer, setRace] = useState("");
    const [languageAdventurer, setLanguage] = useState("");
    const [level, setLevel] = useState("");
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [charisma, setCharisma] = useState("");
    const [copper, setCopper] = useState("");
    const [silver, setSilver] = useState("");
    const [gold, setGold] = useState("");
    const [inventory, setInventory] = useState("");
    const [weaponName, setWeaponName] = useState("");
    const [weaponType, setWeaponType] = useState("");
    const [weaponDamage, setWeaponDamage] = useState("");
    const [weaponDamageType, setWeaponDamageType] = useState("");
    const [weaponProperties, setWeaponProperties] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("name", name);
            params.append("classAdventurer", classAdventurer);
            params.append("raceAdventurer", raceAdventurer);
            params.append("languages", languageAdventurer);
            params.append("level", level);
            params.append("strength", strength);
            params.append("dexterity", dexterity);
            params.append("constitution", constitution);
            params.append("intelligence", intelligence);
            params.append("wisdom", wisdom);
            params.append("charisma", charisma);
            params.append("copper", copper);
            params.append("silver", silver);
            params.append("gold", gold);
            params.append("inventory", inventory);
            params.append("weaponName", weaponName);
            params.append("weaponType", weaponType);
            params.append("weaponDamage", weaponDamage);
            params.append("weaponDamageType", weaponDamageType);
            params.append("weaponProperties", weaponProperties);
            await createAdventurer(userID, params.toString());
            navigate(`/adventurers/${userID}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="form-containerAdventurer">
            <form className="formContainerAdventurer" onSubmit={handleSubmit}>
                <h1>Create Adventurer</h1>
                <div className="idContainerAdventurer">
                    <label>UID:</label>
                    <input type="number" disabled value={userID} />
                    <label>Level: </label>
                    <input type="number" name="level" required value={level} onChange={(e) => setLevel(e.target.value)} />
                </div>
                <label>Adventurer Name:</label>
                <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                <p></p>
                <div className="SelectContainersAdventure">
                    <label>Adventurer class: </label>
                    <select name="classAdventurer" id="classAdventurer" value={classAdventurer} onChange={(e) => setClass(e.target.value)}>
                        <option value="Barbarian" selected>Barbarian</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Monk">Monk</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                    <label> Adventurer race: </label>
                    <select name="raceAdventurer" id="raceAdventurer" value={raceAdventurer} onChange={(e) => setRace(e.target.value)}>
                        <option value="Dragonborn" selected>Dragonborn</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Elf">Elf</option>
                        <option value="Gnome">Gnome</option>
                        <option value="Half-Elf">Half-Elf</option>
                        <option value="Half-Orc">Half-Orc</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Human">Human</option>
                        <option value="Tiefling">Tiefling</option>
                    </select>
                </div>
                <div className="statsLanguagesAdventurer">
                    <label> Languages</label>
                    <select name="languageAdventurer" multiple id="languageAdventurer" value={languageAdventurer} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="Common" selected>Common</option>
                        <option value="Dwarvish">Dwarvish</option>
                        <option value="Elvish">Elvish</option>
                        <option value="Giant">Giant</option>
                        <option value="Gnomish">Gnomish</option>
                        <option value="Goblin">Goblin</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Orc">Orc</option>
                        <option value="Abyssal">Abyssal</option>
                        <option value="Celestial">Celestial</option>
                        <option value="Draconic">Draconic</option>
                        <option value="Deep Speech">Deep Speech</option>
                        <option value="Infernal">Infernal</option>
                        <option value="Primordial">Primordial</option>
                        <option value="Sylvan">Sylvan</option>
                        <option value="Undercommon">Undercommon</option>
                    </select>
                </div>
                <div className="statsContainerAdventurer">
                    <label> Strength: </label>
                    <label> Dexterity: </label>
                    <label> Constitution: </label>
                    <input type="number" name="strength" required value={strength} onChange={(e) => setStrength(e.target.value)} />
                    <input type="number" name="dexterity" required value={dexterity} onChange={(e) => setDexterity(e.target.value)} />
                    <input type="number" name="constitution" required value={constitution} onChange={(e) => setConstitution(e.target.value)} />
                    <label> Intelligence: </label>
                    <label> Wisdom: </label>
                    <label> Charisma: </label>
                    <input type="number" name="intelligence" required value={intelligence} onChange={(e) => setIntelligence(e.target.value)} />
                    <input type="number" name="wisdom" required value={wisdom} onChange={(e) => setWisdom(e.target.value)} />
                    <input type="number" name="charisma" required value={charisma} onChange={(e) => setCharisma(e.target.value)} />
                </div>
                <div className="moneyContainerAdventurer">
                    <label> Copper coin </label>
                    <label> Silver coin </label>
                    <label> Gold coin </label>
                    <input type="number" name="copper" required value={copper} onChange={(e) => setCopper(e.target.value)} />
                    <input type="number" name="silver" required value={silver} onChange={(e) => setSilver(e.target.value)} />
                    <input type="number" name="gold" required value={gold} onChange={(e) => setGold(e.target.value)} />
                </div>
                <div className="weaponContainerAdventurer">
                    <label> Weapon </label>
                    <input type="text" name="damage" placeholder="Weapon" required value={weaponDamage} onChange={(e) => setWeaponDamage(e.target.value)} />
                    <label> Damage Type </label>
                    <input type="text" name="damageType" placeholder="Damage Type" required value={weaponDamageType} onChange={(e) => setWeaponDamageType(e.target.value)} />
                    <label> Weapon Name </label>
                    <input type="text" name="weaponName" placeholder="Weapon Name" required value={weaponName} onChange={(e) => setWeaponName(e.target.value)} />
                    <label> Properties </label>
                    <input type="text" name="properties" placeholder="Properties" required value={weaponProperties} onChange={(e) => setWeaponProperties(e.target.value)} />
                    <label> Type </label>
                    <select name="type" id="type" value={weaponType} onChange={(e) => setWeaponType(e.target.value)}>
                        <option value="Simple" selected>Simple</option>
                        <option value="Martial">Martial</option>
                        <option value="Ranged">Ranged</option>
                        <option value="Finesse">Finesse</option>
                        <option value="Heavy">Heavy</option>
                        <option value="Light">Light</option>
                        <option value="Two-Handed">Two-Handed</option>
                        <option value="Versatile">Versatile</option>
                        <option value="Ammunition">Ammunition</option>
                        <option value="Loading">Loading</option>
                        <option value="Reach">Reach</option>
                        <option value="Thrown">Thrown</option>
                        <option value="Special">Special</option>
                    </select>
                </div>
                <button className="submitButton" type="submit">Submit</button>
                <a className="aAdventurer" href={`/adventurers/${userID}`}>Go back</a>
            </form>
        </div>
    );
}