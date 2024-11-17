import styled from "styled-components";

function App() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo src="/assets/logo-mobile.svg" />
          <BoardSelectContainer>
            <BoardName>Platform Launch</BoardName>
            <DownArrow src="/assets/icon-chevron-down.svg" />
          </BoardSelectContainer>
        </HeaderContainer>
        <HeaderContainer>
          <Button>
            <Add src="/assets/icon-add-task-mobile.svg" />
          </Button>
          <Add src="/assets/icon-vertical-ellipsis.svg" />
        </HeaderContainer>
      </Header>
      <Main>
        <BoardName>Hi banana!</BoardName>
      </Main>
    </>
  );
}

const Header = styled.div`
  height: 64px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 24px;
  height: 25px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
`;

const BoardSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
`;

const BoardName = styled.h1`
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const DownArrow = styled.img`
  max-height: 100%;
`;

const Button = styled.button`
  background-color: #a8a4ff;
  height: 32px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
`;
const Add = styled.img``;

const Main = styled.main`
  background-color: #f4f7fd;
  min-height: calc(100vh - 64px);
`;

export default App;
