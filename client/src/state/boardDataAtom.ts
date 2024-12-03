import { atom } from "jotai";
import { IBoard } from "../data";

const defaultBoard = {
  name: "",
  columns: [],
};

export const boardDataAtom = atom<IBoard>(defaultBoard);
