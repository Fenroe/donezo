import styled from "styled-components";

interface HeaderProps {
  boardName: string;
  active: boolean;
}

export const Header = ({ boardName, active }: HeaderProps) => {
  return (
    <OuterContainer data-testid="header">
      <MobileContainer>
        <Logo src="/assets/logo-mobile.svg" />
        <BoardSelectContainer>
          <BoardName data-testid="boardName">{boardName}</BoardName>
          <DownArrow src="/assets/icon-chevron-down.svg" />
        </BoardSelectContainer>
      </MobileContainer>
      <DesktopContainer>
        <BoardName>{boardName}</BoardName>
      </DesktopContainer>
      <MobileContainer>
        <Button $active={active}>
          <Add src="/assets/icon-add-task-mobile.svg" />
        </Button>
        <Add src="/assets/icon-vertical-ellipsis.svg" />
      </MobileContainer>
      <DesktopContainer>
        <DesktopAddButton $active={active}>+ Add New Task</DesktopAddButton>
        <Add src="/assets/icon-vertical-ellipsis.svg" />
      </DesktopContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;

  @media (min-width: 600px) {
    display: none;
  }
`;

const DesktopContainer = styled.div`
  display: none;
  align-items: center;
  gap: 16px;
  height: 100%;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const Logo = styled.img`
  width: 24px;
  height: 25px;
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

const Button = styled.button<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? "#635FC7" : "#CECDE7")};
  height: 32px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
`;
const Add = styled.img``;

const DesktopAddButton = styled.button<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? "#635FC7" : "#CECDE7")};
  height: 48px;
  width: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
`;
