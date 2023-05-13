import { Stats } from "../Adventurer/Stats";
import { Weapon } from "../Adventurer/Weapon";

export interface Monster {
    id: number;
    name: string;
    description: string;
    size: string;
    type: string;
    aligment: string;
    armorClass: number;
    hitPoints: number;
    speed: string;
    stats: Stats[];
    weapon: Weapon[];
    languages: string[];
    challengeRating: number;
}