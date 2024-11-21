import styled from "styled-components";
import { PrimaryButton } from "../components";

interface HeaderProps {
  boardName: string;
  active: boolean;
}

export const Header = ({ boardName, active }: HeaderProps) => {
  return (
    <OuterContainer data-testid="header">
      <LogoContainer>
        <Logo src="/assets/logo-dark.svg" />
      </LogoContainer>
      <InnerContainer>
        <MobileContainer>
          <MobileLogo src="/assets/logo-mobile.svg" />
          <BoardSelectContainer>
            <BoardName data-testid="boardName">{boardName}</BoardName>
            <DownArrow src="/assets/icon-chevron-down.svg" />
          </BoardSelectContainer>
        </MobileContainer>
        <DesktopContainer>
          <BoardName>{boardName}</BoardName>
        </DesktopContainer>
        <MobileContainer>
          <Button $active={!active}>
            <Add src="/assets/icon-add-task-mobile.svg" />
          </Button>
          <Add src="/assets/icon-vertical-ellipsis.svg" />
        </MobileContainer>
        <DesktopContainer>
          <PrimaryButton text="+Add New Task" isActive={active} />
          <Add src="/assets/icon-vertical-ellipsis.svg" />
        </DesktopContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid #f4f7fd;
`;

const LogoContainer = styled.div`
  display: none;
  justify-content: start;
  flex-shrink: 0;
  align-items: center;
  height: 80px;
  width: 261px;
  padding: 0 24px;
  border-right: 1px solid #f4f7fd;

  @media (min-width: 600px) {
    display: flex;
  }
  @media (min-width: 1200px) {
    height: 96px;
    width: 300px;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
`;

const OuterContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 600px) {
    height: 80px;
  }

  @media (min-width: 1200px) {
    height: 96px;
  }
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

const MobileLogo = styled.img`
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 600px) {
    font-size: 20px;
    line-height: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 30px;
  }
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
  cursor: ${(props) => (props.$active ? "pointer" : "unset")};

  &:hover {
    background-color: ${(props) => (props.$active ? "#A8A4FF" : "#CECDE7")};
  }
`;
const Add = styled.img``;
