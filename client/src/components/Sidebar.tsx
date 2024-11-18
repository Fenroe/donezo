import { useState } from "react";
import styled from "styled-components";

interface SidebarProps {
  boardNames: string[];
}
export const Sidebar = ({ boardNames }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarTop>
        <SidebarHeader>
          <SidebarLogo src="/assets/logo-dark.svg" />
        </SidebarHeader>
        <SidebarMain>
          <MenuHeading>all boards ({boardNames.length})</MenuHeading>
          <SidebarMenu>
            {boardNames.map((name) => (
              <SidebarButton key={name}>
                <ButtonIcon src="/assets/icon-board.svg" />
                <SidebarLabel>{name}</SidebarLabel>
              </SidebarButton>
            ))}
            <SidebarButton>
              <ButtonIcon src="/assets/icon-board.svg" />
              <SidebarLabel>+ Create New Board</SidebarLabel>
            </SidebarButton>
          </SidebarMenu>
        </SidebarMain>
      </SidebarTop>
      <SidebarBottom>
        <SidebarFooter>
          <h1>Hi banana!</h1>
        </SidebarFooter>
      </SidebarBottom>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: ${(props) => (props.$isOpen ? "300px" : "0")};
  height: 100vh;
  background-color: #white;
  color: #ecf0f1;
  display: none;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  transition: width 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  justify-content: space-between;
  box-sizing: border-box;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const SidebarBottom = styled.div``;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0 24px;
`;

const SidebarLogo = styled.img`
  height: 25px;
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
  font-variant: small-caps;
  padding: 0 24px;
`;

const SidebarButton = styled.button`
  display: flex;
  width: 200px;
  height: 48px;
  padding: 0 24px;
  justify-content: start;
  align-items: center;
  border: none;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: white;
  color: #828fa3;
`;

const ButtonIcon = styled.img`
  height: 160x;
  width: 16px;
`;

const SidebarLabel = styled.span`
  margin-left: 10px;
`;

const SidebarFooter = styled.div`
  height: 100px;
  justify-self: end;
`;
