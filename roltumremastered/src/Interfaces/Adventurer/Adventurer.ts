import { Stats } from "./Stats";
import { Weapon } from "./Weapon";

export interface Adventurer {
    id: number;
    classAdventurer: string;
    inventory: string[];
    languages: string[];
    level: number;
    money: string[];
    name: string;
    raceAdventurer: string;
    stats: Stats[];
    weapon: Weapon[];
}