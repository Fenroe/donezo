import { styled } from "styled-components";
import { IBoard } from "../data/types";
import { EmptyBoard, ListHeading } from "../components";

interface BoardProps {
  boardData: IBoard;
}

export const Board = ({ boardData }: BoardProps) => {
  return (
    <Container>
      {boardData.columns.length > 0 ? (
        <ColumnContainer className="">
          <ColumnHeader>
            <ColumnTag />
            <ListHeading
              text={boardData.columns[0].name}
              count={boardData.columns[0].tasks.length}
            />
          </ColumnHeader>
          <Task>
            <TaskHeading>{boardData.columns[0].tasks[0].title}</TaskHeading>
            <TaskSubheading>0 of 3 subtasks</TaskSubheading>
          </Task>
        </ColumnContainer>
      ) : (
        <EmptyBoard />
      )}
    </Container>
  );
};

const Task = styled.div`
  padding: 24px;
  width: 280px;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TaskHeading = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #000112;
`;

const TaskSubheading = styled.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #828fa3;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: start;
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ColumnTag = styled.div`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: #49c4e5;
`;
const Container = styled.div`
  background-color: #f4f7fd;
  min-height: calc(100vh - 64px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 600px) {
    min-height: calc(100vh - 80px);
  }

  @media (min-width: 1200px) {
    min-height: calc(100vh - 96px);
  }
`;
