import { Country } from "./Country";
import { Npc } from "./Npc";
import { Item } from "./Item";
import { Quest } from "./Quest";
export interface Campaign{
    id: number;
    name: string;
    description: string;
    country: Country[];
    npc: Npc[];
    item: Item[];
    quest: Quest[];
}