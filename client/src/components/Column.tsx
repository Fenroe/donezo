import { IColumn } from "../data";
import { ListHeading } from "./ListHeading";
import { TaskCard } from "./TaskCard";
import { styled } from "styled-components";

interface ColumnProps {
  data: IColumn;
}

export const Column = ({ data }: ColumnProps) => {
  return (
    <ColumnContainer className="">
      <ColumnHeader>
        <ColumnTag $color={data.tagColor} />
        <ListHeading text={data.name} count={data.tasks.length} />
      </ColumnHeader>
      {data.tasks.map((task) => (
        <TaskCard task={task} key={task.title} />
      ))}
    </ColumnContainer>
  );
};

// The margin is a hacky solution to an annoying visual bug
// TODO: find a better solution?
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: start;
  margin-bottom: 24px;
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ColumnTag = styled.div<{ $color: string }>`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.$color};
`;
