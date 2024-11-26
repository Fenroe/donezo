import styled from "styled-components";
import { Sidebar } from "./components";
import { useEffect, useState } from "react";
import { IProjectData, IBoard } from "./data";
import { Board, CreateTaskModal, Header, ViewTaskModal } from "./modules";
import { activeModalAtom } from "./state";
import { useAtomValue } from "jotai";

function App() {
  const activeModal = useAtomValue(activeModalAtom);

  const [data, setData] = useState<IProjectData | null>(null);

  const getBoardNames = (data: IProjectData) => {
    if (data.boards.length === 0) {
      return [];
    }
    return data.boards.map((board) => board.name);
  };

  const [board, setBoard] = useState<IBoard | null>(null);

  const setBoardByName = (boardName: string) => {
    if (data === null) return;
    const newBoard = data?.boards.filter(
      (board) => board.name === boardName
    )[0];
    if (!newBoard) return;
    setBoard(newBoard);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/data.json");
      return (await res.json()) as IProjectData;
    };

    const getBoardNames = async () => {
      const res = await fetch("/data.json");
      const data = (await res.json()) as IProjectData;
      return data.boards.map((board) => board.name);
    };

    const getBoardData = async (boardName: string) => {
      const res = await fetch("/data.json");
      const data = (await res.json()) as IProjectData;
      return data.boards.filter((board) => board.name === boardName)[0];
    };

    getData().then((res) => {
      setData(res);
      setBoard(res.boards[0]);
    });
  }, []);

  return (
    <>
      {activeModal === "viewTask" && <ViewTaskModal />}
      {activeModal === "createTask" && <CreateTaskModal />}
      <AppContainer>
        <BodyContainer>
          <Header
            boardName={data ? data.boards[0].name : ""}
            active={data !== null && data?.boards.length > 0}
          />
          <Main>
            <Sidebar boardNames={data !== null ? getBoardNames(data) : []} />
            {board !== null && <Board boardData={board} />}
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
