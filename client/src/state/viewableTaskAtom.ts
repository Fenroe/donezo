import { atom } from "jotai";
import { ITask } from "../data";

export const viewableTaskAtom = atom<ITask | null>(null);
