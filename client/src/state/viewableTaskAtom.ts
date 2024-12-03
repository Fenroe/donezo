import { atom } from "jotai";
import { ITask } from "../data";

const defaultTask: ITask = {
  title: "",
  description: "",
  status: "",
  subtasks: [],
};

export const viewableTaskAtom = atom<ITask>(defaultTask);
