import { styled } from "styled-components";
import { IBoard } from "../data/types";
import { Column, EmptyBoard } from "../components";

interface BoardProps {
  boardData: IBoard;
}

export const Board = ({ boardData }: BoardProps) => {
  return (
    <Container $isEmpty={boardData.columns.length === 0}>
      {boardData.columns.length > 0 ? (
        <>
          {boardData.columns.map((column) => (
            <Column data={column} key={column.name} />
          ))}
        </>
      ) : (
        <EmptyBoard />
      )}
    </Container>
  );
};

const Container = styled.div<{ $isEmpty: boolean }>`
  padding: 24px;
  background-color: #f4f7fd;
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.$isEmpty ? "center" : "start")};
  justify-content: ${(props) => (props.$isEmpty ? "center" : "start")};
  gap: 24px;
  width: 100%;
  overflow: auto;

  @media (min-width: 600px) {
    height: 100%;
  }

  @media (min-width: 1200px) {
    height: 100%;
  }
`;
