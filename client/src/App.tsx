import styled from "styled-components";
import { EmptyBoard, Header, Sidebar } from "./components";
import { useEffect, useState } from "react";
import { ProjectData } from "./data";

function App() {
  const [data, setData] = useState<ProjectData | null>(null);

  const getBoardNames = (data: ProjectData) => {
    if (data.boards.length === 0) {
      return [];
    }
    return data.boards.map((board) => board.name);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/data.json");
      return (await res.json()) as ProjectData;
    };

    getData().then((res) => setData(res));
  }, []);

  return (
    <>
      <AppContainer>
        <Sidebar boardNames={data !== null ? getBoardNames(data) : []} />
        <BodyContainer>
          <Header
            boardName={data ? data.boards[0].name : ""}
            active={data !== null && data?.boards.length > 0}
          />
          <Main>
            <EmptyBoard />
          </Main>
        </BodyContainer>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  width: 100%;
`;

const Main = styled.main`
  background-color: #f4f7fd;
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export default App;
