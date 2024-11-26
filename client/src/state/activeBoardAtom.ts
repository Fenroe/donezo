import { atom } from "jotai";
import { IBoard } from "../data";

const defaultBoard = {
  name: "",
  columns: [],
};

export const activeBoardAtom = atom<IBoard>(defaultBoard);
