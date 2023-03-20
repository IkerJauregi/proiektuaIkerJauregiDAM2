import { Campaign } from "./Campaign";
import { Monster } from "./Monster";

export interface Master {
    id: number;
    name: string;
    campaign?: Campaign[];
    monster?: Monster[];
}