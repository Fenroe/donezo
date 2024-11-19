import { useState } from "react";
import styled from "styled-components";
import { ListHeading, SwitchButton, SidebarButton } from "../components";

interface SidebarProps {
  boardNames: string[];
}
export const Sidebar = ({ boardNames }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const showSidebar = () => {
    setIsOpen(true);
  };

  const hideSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SidebarContainer $isOpen={isOpen}>
        <SidebarTop>
          <SidebarMain>
            <ListHeading text="all boards" count={boardNames.length} />
            <SidebarMenu>
              {boardNames.map((name) => (
                <SidebarButton key={name} text={name} />
              ))}
              <SidebarButton text="+ Create New Board" isVariant />
            </SidebarMenu>
          </SidebarMain>
        </SidebarTop>
        <SidebarBottom $isOpen={isOpen}>
          <SidebarFooter $isOpen={isOpen}>
            <SidebarThemeContainer>
              <ThemeIcon src="/assets/icon-light-theme.svg" />
              <SwitchButton />
              <ThemeIcon src="/assets/icon-dark-theme.svg" />
            </SidebarThemeContainer>
            <SidebarToggleContainer>
              <SidebarToggle onClick={hideSidebar}>
                <ToggleIcon src="/assets/icon-hide-sidebar.svg" />
                Hide Sidebar
              </SidebarToggle>
            </SidebarToggleContainer>
          </SidebarFooter>
        </SidebarBottom>
      </SidebarContainer>
      <OpenSidebarContainer $isOpen={isOpen}>
        <OpenSidebarButton $isOpen={isOpen} onClick={showSidebar}>
          <ShowSidebarIcon src="/assets/icon-show-sidebar.svg" />
        </OpenSidebarButton>
      </OpenSidebarContainer>
    </>
  );
};

const OpenSidebarContainer = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "none" : "inline")};
  position: relative;
  height: calc(100vh - 64px);
  background-color: pink;
  @media (min-width: 600px) {
    height: calc(100vh - 80px);
  }

  @media (min-width: 1200px) {
    height: calc(100vh - 96px);
  }
`;

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  background-color: white;
  width: 0;
  height: calc(100vh - 64px);
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  transition: width 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  justify-content: space-between;
  box-sizing: border-box;
  padding: 32px 0;

  @media (min-width: 600px) {
    width: ${(props) => (props.$isOpen ? "261px" : "0")};
    height: calc(100vh - 80px);
  }

  @media (min-width: 1200px) {
    width: ${(props) => (props.$isOpen ? "300px" : "0")};
    height: calc(100vh - 96px);
  }
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const SidebarBottom = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  position: relative;
  overflow: visible;
`;

const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const SidebarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const MenuHeading = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;
  color: #828fa3;
  text-transform: uppercase;
  padding: 0 24px;
`;

const SidebarThemeContainer = styled.div`
  background-color: #f4f7fd;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #828fa3;
  width: 100%;
  border-radius: 8px;
`;

const ThemeIcon = styled.img`
  height: 15px;
  width: 15px;
`;

const SidebarFooter = styled.div<{ $isOpen: boolean }>`
  height: 100px;
  width: 100%;
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 0 13px;

  @media (min-width: 600px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
  }
`;

const SidebarToggleContainer = styled.div`
  width: 100%;
  color: #828fa3;
`;

const SidebarToggle = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  color: #828fa3;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: bold;
  line-height: 19px;
  font-size: 15px;
`;

const ToggleIcon = styled.img`
  width: 18px;
  height: 16px;
`;

const ShowSidebarIcon = styled.img`
  height: 10px;
  width: 16px;
`;

const OpenSidebarButton = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  display: none;
  bottom: 80px;
  right: -56px;
  height: 48px;
  width: 56px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: #635fc7;
  color: white;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.2s;

  &:hover {
    background-color: #a8a4ff;
  }

  @media (min-width: 600px) {
    display: ${(props) => (props.$isOpen ? "none" : "flex")};
  }
`;
