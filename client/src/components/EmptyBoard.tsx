import { styled } from "styled-components";
import { PrimaryButton } from "./PrimaryButton";

export const EmptyBoard = () => {
  return (
    <Container>
      <Heading>
        This board is empty. Create a new column to get started.
      </Heading>
      <PrimaryButton text="+ Add New Column" isActive />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 300px;
`;

const Heading = styled.span`
  font-size: 18px;
  line-height: 23px;
  font-weight: bold;
  color: #828fa3;
  text-align: center;
`;
