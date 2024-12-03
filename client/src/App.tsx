import styled from "styled-components";
import { useEffect } from "react";
import { IProjectData } from "./data";
import {
  Board,
  CreateTaskModal,
  Header,
  ViewTaskModal,
  Sidebar,
} from "./modules";
import {
  activeModalAtom,
  boardDataAtom,
  activeBoardAtom,
  boardsAtom,
} from "./state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

function App() {
  const activeModal = useAtomValue(activeModalAtom);

  const [boardData, setBoardData] = useAtom(boardDataAtom);

  const [activeBoard, setActiveBoard] = useAtom(activeBoardAtom);

  const setBoards = useSetAtom(boardsAtom);

  const getBoards = async () => {
    const res = await fetch("/data.json");
    const data = (await res.json()) as IProjectData;
    return data.boards.map((board) => board.name);
  };

  const getBoardData = async (boardName: string) => {
    const res = await fetch("/data.json");
    const data = (await res.json()) as IProjectData;
    return data.boards.filter((board) => board.name === boardName)[0];
  };

  useEffect(() => {
    getBoards()
      .then((res) => {
        setBoards(res);
        setActiveBoard(res[0]);
        return getBoardData(res[0]);
      })
      .then((res) => {
        setBoardData(res);
      });
  }, []);

  useEffect(() => {
    if (activeBoard === "") return;
    getBoardData(activeBoard).then((res) => {
      setBoardData(res);
    });
  }, [activeBoard]);

  return (
    <>
      {activeModal === "viewTask" && <ViewTaskModal />}
      {activeModal === "createTask" && <CreateTaskModal />}
      <AppContainer>
        <BodyContainer>
          <Header />
          <Main>
            <Sidebar />
            <Board boardData={boardData} />
          </Main>
        </BodyContainer>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = styled.main`
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;

  @media (min-width: 600px) {
    height: calc(100vh - 80px);
  }

  @media (min-width: 1200px) {
    height: calc(100vh - 96px);
  }
`;

export default App;
