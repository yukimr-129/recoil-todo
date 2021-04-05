import { atom } from "recoil";

export type Tasks = {
    content: string;
    deadline: any;
    priority: number;
}

export const TasksList = atom<Array<Tasks>>({
    key: 'TasksList',
    default: []
})