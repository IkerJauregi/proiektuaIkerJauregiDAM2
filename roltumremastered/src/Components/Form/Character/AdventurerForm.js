import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createAdventurer } from "../../../Services/Adventurer";
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
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                User ID:
                <input type="text" disabled value={userID} />
            </label>
            <br />
            <label>
                Adventurer Name:
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>Adventurer class: </label>
            <select name="classAdventurer" id="classAdventurer" value={classAdventurer} onChange={(e) => setClass(e.target.value)}>
                <option value="Barbarian">Barbarian</option>
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
            <br />
            <label> Adventurer race: </label>
            <select name="raceAdventurer" id="raceAdventurer" value={raceAdventurer} onChange={(e) => setRace(e.target.value)}>
                <option value="Dragonborn">Dragonborn</option>
                <option value="Dwarf">Dwarf</option>
                <option value="Elf">Elf</option>
                <option value="Gnome">Gnome</option>
                <option value="Half-Elf">Half-Elf</option>
                <option value="Half-Orc">Half-Orc</option>
                <option value="Halfling">Halfling</option>
                <option value="Human">Human</option>
                <option value="Tiefling">Tiefling</option>
            </select>
            <br />
            <label> Languages</label>
            <select name="languageAdventurer" multiple id="languageAdventurer" value={languageAdventurer} onChange={(e) => setLanguage(e.target.value)}>
                <option value="Common">Common</option>
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
            <br />
            <label> level: </label>
            <input type="number" name="level" value={level} onChange={(e) => setLevel(e.target.value)} />
            <br />
            <label> Strength: </label>
            <input type="number" name="strength" value={strength} onChange={(e) => setStrength(e.target.value)} />
            <br />
            <label> Dexterity: </label>
            <input type="number" name="dexterity" value={dexterity} onChange={(e) => setDexterity(e.target.value)} />
            <br />
            <label> Constitution: </label>
            <input type="number" name="constitution" value={constitution} onChange={(e) => setConstitution(e.target.value)} />
            <br />
            <label> Intelligence: </label>
            <input type="number" name="intelligence" value={intelligence} onChange={(e) => setIntelligence(e.target.value)} />
            <br />
            <label> Wisdom: </label>
            <input type="number" name="wisdom" value={wisdom} onChange={(e) => setWisdom(e.target.value)} />
            <br />
            <label> Charisma: </label>
            <input type="number" name="charisma" value={charisma} onChange={(e) => setCharisma(e.target.value)} />
            <br />
            <label> Copper coin </label>
            <input type="number" name="copper" value={copper} onChange={(e) => setCopper(e.target.value)} />
            <br />
            <label> Silver coin </label>
            <input type="number" name="silver" value={silver} onChange={(e) => setSilver(e.target.value)} />
            <br />
            <label> Gold coin </label>
            <input type="number" name="gold" value={gold} onChange={(e) => setGold(e.target.value)} />
            <br />
            <label> Inventory </label>
            <input type="text" name="inventory" value={inventory} onChange={(e) => setInventory(e.target.value)} />
            <br />
            <label> Weapon </label>
            <input type="text" name="damage" value={weaponDamage} onChange={(e) => setWeaponDamage(e.target.value)} />
            <br />
            <label> Damage Type </label>
            <input type="text" name="damageType" value={weaponDamageType} onChange={(e) => setWeaponDamageType(e.target.value)} />
            <br />
            <label> Weapon Name </label>
            <input type="text" name="weaponName" value={weaponName} onChange={(e) => setWeaponName(e.target.value)} />
            <br />
            <label> Properties </label>
            <input type="text" name="properties" value={weaponProperties} onChange={(e) => setWeaponProperties(e.target.value)} />
            <br />
            <label> Type </label>
            <select name="type" id="type" value={weaponType} onChange={(e) => setWeaponType(e.target.value)}>
                <option value="Simple">Simple</option>
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
            <br />
            <button type="submit">submit</button>
        </form>
    );
}