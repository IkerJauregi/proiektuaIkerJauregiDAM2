import { Campaign } from "./Campaign";
import { Adventurer } from "./Adventurer";

export interface User {
    id: number;
    name: string;
    password: string;
    campaigns?: Campaign[];
    adventurers?: Adventurer[];
}