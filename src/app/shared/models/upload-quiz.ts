import { Course } from "./course.model";
import { User } from "./user.model";

export interface Book{
    id: number;
    title: string;
    publicator: User;
    course: Course;
    description: string;

}
