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
    const navigate = useNavigate();

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
            navigate(`/monsters/${userID}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="form-containerAdventurer">
            <form className="formContainerAdventurer" onSubmit={handleSubmit}>
                <h1>Create Monster</h1>
                <div className="idContainerAdventure">
                    <label>User ID:</label>
                    <input type="text" disabled value={userID} />
                </div>
                <label>Name:</label>
                <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                <label>Description:</label>
                <input type="text" value={description} required onChange={(e) => setDescription(e.target.value)} />
                <label>Monster Type:</label>
                <select name="type" id="type" value={monsterType} onChange={(e) => setMonsterType(e.target.value)}>
                    <option value="" disabled></option>
                    <option value="Aberration">Aberration</option>
                    <option value="Beast">Beast</option>
                    <option value="Celestial">Celestial</option>
                    <option value="Construct">Construct</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Elemental">Elemental</option>
                    <option value="Fey">Fey</option>
                    <option value="Fiend">Fiend</option>
                    <option value="Giant">Giant</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Monstrosity">Monstrosity</option>
                    <option value="Ooze">Ooze</option>
                    <option value="Plant">Plant</option>
                    <option value="Undead">Undead</option>
                </select>
                <label>Alignment:</label>
                <select name="alignment" id="alignment" value={alignment} onChange={(e) => setAlignment(e.target.value)}>
                    <option value="" disabled></option>
                    <option value="Lawful Good">Lawful Good</option>
                    <option value="Neutral Good">Neutral Good</option>
                    <option value="Chaotic Good">Chaotic Good</option>
                    <option value="Lawful Neutral">Lawful Neutral</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Chaotic Neutral">Chaotic Neutral</option>
                    <option value="Lawful Evil">Lawful Evil</option>
                    <option value="Neutral Evil">Neutral Evil</option>
                    <option value="Chaotic Evil">Chaotic Evil</option>
                </select>
                <label>Size:</label>
                <select name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="" disabled></option>
                    <option value="Tiny">Tiny</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Huge">Huge</option>
                    <option value="Gargantuan">Gargantuan</option>
                </select>
                <label>Speed:</label>
                <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} />
                <p></p>
                <div className="statsLanguagesAdventurer">
                    <label>Languages:</label>
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
                </div>
                <div className="statsContainerAdventurer">
                    <label>Armor Class:</label>
                    <label>Challenge Rating:</label>
                    <label>Hit Points:</label>
                    <input type="number" value={armorClass} required onChange={(e) => setArmorClass(e.target.value)} />
                    <input type="number" value={challengeRating} required onChange={(e) => setChallengeRating(e.target.value)} />
                    <input type="number" value={hitPoints} required onChange={(e) => setHitPoints(e.target.value)} />
                    <label>Charisma:</label>
                    <label>Constitution:</label>
                    <label>Dexterity:</label>
                    <input type="number" value={charisma} required onChange={(e) => setCharisma(e.target.value)} />
                    <input type="number" value={constitution} required onChange={(e) => setConstitution(e.target.value)} />
                    <input type="number" value={dexterity} required onChange={(e) => setDexterity(e.target.value)} />
                    <label>Intelligence:</label>
                    <label>Strength:</label>
                    <label>Wisdom:</label>
                    <input type="number" value={intelligence} required onChange={(e) => setIntelligence(e.target.value)} />
                    <input type="number" value={strength} required onChange={(e) => setStrength(e.target.value)} />
                    <input type="number" value={wisdom} required onChange={(e) => setWisdom(e.target.value)} />
                </div>

                <label>Weapon Name:</label>
                <input type="text" value={weaponName} required onChange={(e) => setWeaponName(e.target.value)} />
                <label>Weapon Type:</label>
                <input type="text" value={weaponType} required onChange={(e) => setWeaponType(e.target.value)} />
                <label>Weapon Damage:</label>
                <input type="text" value={weaponDamage} required onChange={(e) => setWeaponDamage(e.target.value)} />
                <label>Weapon Damage Type:</label>
                <input type="text" value={weaponDamageType} required onChange={(e) => setWeaponDamageType(e.target.value)} />
                <label>Weapon Properties:</label>
                <input type="text" value={weaponProperties} required onChange={(e) => setWeaponProperties(e.target.value)} />
                <button className="submitButton" type="submit" value="Submit">Submit</button>
                <a className="aAdventurer" href={`/monsters/${userID}`}>Go back</a>
            </form>
        </div>
    );
}