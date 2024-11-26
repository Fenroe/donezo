import { atom } from "jotai";

type TActiveModal =
  | ""
  | "viewTask"
  | "createTask"
  | "editTask"
  | "deleteTask"
  | "createBoard"
  | "editBoard"
  | "deleteBoard";

export const activeModalAtom = atom<TActiveModal>("");
