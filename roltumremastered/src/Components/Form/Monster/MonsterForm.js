import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createMonster } from "../../../Services/Monster";

export function InsertMonster() {
    const userID = sessionStorage.getItem("userId");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [speed, setSpeed] = useState("");
    const [alignment, setAlignment] = useState("");
    const [armorClass, setArmorClass] = useState("");
    const [challengeRating, setChallengeRating] = useState("");
    const [hitPoints, setHitPoints] = useState("");
    const [languages, setLanguages] = useState("");
    const [charisma, setCharisma] = useState("");
    const [constitution, setConstitution] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [strength, setStrength] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [monsterType, setMonsterType] = useState("");
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
            params.append("description", description);
            params.append("size", size);
            params.append("speed", speed);
            params.append("alignment", alignment);
            params.append("armorClass", armorClass);
            params.append("challengeRating", challengeRating);
            params.append("hitPoints", hitPoints);
            params.append("languages", languages);
            params.append("charisma", charisma);
            params.append("constitution", constitution);
            params.append("dexterity", dexterity);
            params.append("intelligence", intelligence);
            params.append("strength", strength);
            params.append("wisdom", wisdom);
            params.append("type", monsterType);
            params.append("weaponName", weaponName);
            params.append("weaponType", weaponType);
            params.append("weaponDamage", weaponDamage);
            params.append("weaponDamageType", weaponDamageType);
            params.append("weaponProperties", weaponProperties);
            await createMonster(userID, params.toString());
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
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Size:
                <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
            </label>
            <label>
                Speed:
                <input type="text" value={speed} onChange={(e) => setSpeed(e.target.value)} />
            </label>
            <label>
                Alignment:
                <input type="text" value={alignment} onChange={(e) => setAlignment(e.target.value)} />
            </label>
            <label>
                Armor Class:
                <input type="text" value={armorClass} onChange={(e) => setArmorClass(e.target.value)} />
            </label>
            <label>
                Challenge Rating:
                <input type="text" value={challengeRating} onChange={(e) => setChallengeRating(e.target.value)} />
            </label>
            <label>
                Hit Points:
                <input type="text" value={hitPoints} onChange={(e) => setHitPoints(e.target.value)} />
            </label>
            <label>
                Languages:
            </label>
            <select name="languageMonster" multiple id="languageMonster" value={languages} onChange={(e) => setLanguages(e.target.value)}>
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
            <label>
                Charisma:
                <input type="text" value={charisma} onChange={(e) => setCharisma(e.target.value)} />
            </label>
            <label>
                Constitution:
                <input type="text" value={constitution} onChange={(e) => setConstitution(e.target.value)} />
            </label>
            <label>
                Dexterity:
                <input type="text" value={dexterity} onChange={(e) => setDexterity(e.target.value)} />
            </label>
            <label>
                Intelligence:
                <input type="text" value={intelligence} onChange={(e) => setIntelligence(e.target.value)} />
            </label>
            <label>
                Strength:
                <input type="text" value={strength} onChange={(e) => setStrength(e.target.value)} />
            </label>
            <label>
                Wisdom:
                <input type="text" value={wisdom} onChange={(e) => setWisdom(e.target.value)} />
            </label>
            <label>
                Monster Type:
                <input type="text" value={monsterType} onChange={(e) => setMonsterType(e.target.value)} />
            </label>
            <label>
                Weapon Name:
                <input type="text" value={weaponName} onChange={(e) => setWeaponName(e.target.value)} />
            </label>
            <label>
                Weapon Type:
                <input type="text" value={weaponType} onChange={(e) => setWeaponType(e.target.value)} />
            </label>
            <label>
                Weapon Damage:
                <input type="text" value={weaponDamage} onChange={(e) => setWeaponDamage(e.target.value)} />
            </label>
            <label>
                Weapon Damage Type:
                <input type="text" value={weaponDamageType} onChange={(e) => setWeaponDamageType(e.target.value)} />
            </label>
            <label>
                Weapon Properties:
                <input type="text" value={weaponProperties} onChange={(e) => setWeaponProperties(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}