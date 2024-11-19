import styled from "styled-components";
import { Sidebar } from "./components";
import { useEffect, useState } from "react";
import { IProjectData, IBoard } from "./data";
import { Board, Header } from "./modules";

function App() {
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

    getData().then((res) => {
      setData(res);
      setBoard(res.boards[0]);
    });
  }, []);

  return (
    <>
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
  height: 100%;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    min-height: calc(100vh - 80px);
  }

  @media (min-width: 1200px) {
    min-height: calc(100vh - 96px);
  }
`;

export default App;
