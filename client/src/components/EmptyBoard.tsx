import { styled } from "styled-components";

export const EmptyBoard = () => {
  return (
    <Container>
      <Heading>
        This board is empty. Create a new column to get started.
      </Heading>
      <Button>+ Add New Column</Button>
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
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #828fa3;
  text-align: center;
`;

const Button = styled.button`
  background-color: #635fc7;
  color: white;
  border: none;
  border-radius: 24px;
  width: 174px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
`;
