import styled from "styled-components";
import { ShowOptionsButton } from "./ShowOptionsButton";

interface ModalHeaderProps {
  heading: string;
  showOptionsButton?: boolean;
}

export const ModalHeader = ({
  heading,
  showOptionsButton = false,
}: ModalHeaderProps) => {
  return (
    <Header>
      <Heading>{heading}</Heading>
      {showOptionsButton && <ShowOptionsButton />}
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const Heading = styled.h2`
  font-size: 18px;
  line-height: 23px;
  font-weight: bold;
  color: #000112;
`;
