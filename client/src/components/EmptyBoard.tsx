import { styled } from "styled-components";
import { AppButton } from "./AppButton";

export const EmptyBoard = () => {
  const handleAddColumn = () => console.log("click");

  return (
    <Container>
      <Heading>
        This board is empty. Create a new column to get started.
      </Heading>
      <AppButton
        text="+ Add New Column"
        size="large"
        isActive
        variant="primary"
        onClick={handleAddColumn}
      />
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
