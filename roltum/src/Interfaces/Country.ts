import { Province } from "./Province";
export interface Country{
    id: number;
    name: string;
    description: string;
    province: Province[];
}