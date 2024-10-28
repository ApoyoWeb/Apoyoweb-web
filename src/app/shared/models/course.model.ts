import { User } from "./user.model";

export interface Course{
    id: number;
    name: string;
    institution: string;
    tutor: User;
}