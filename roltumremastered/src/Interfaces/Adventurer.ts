import { AttributesAdventurer } from "./AttributesAdventurer";
import { SkillsAdventurer } from "./SkillsAdventurer";

export interface Adventurer {
    id: number;
    name: string;
    classAdventurer: string;
    raceAdventurer: string;
    attributesAdventurer?: AttributesAdventurer[];
    skillsAdventurer?: SkillsAdventurer[];
}