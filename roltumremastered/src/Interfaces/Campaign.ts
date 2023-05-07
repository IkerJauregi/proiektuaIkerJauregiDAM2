import { Town } from "./Town";
import { Npc } from "./Npc";
import { Item } from "./Item";
import { Quest } from "./Quest";
export interface Campaign{
    id: number;
    name: string;
    description: string;
    town: Town[];
    npc: Npc[];
    item: Item[];
    quest: Quest[];
    masterId: number;
}