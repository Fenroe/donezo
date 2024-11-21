import styled from "styled-components";
import { ISubtask } from "../data";
import { useState } from "react";

interface SubtaskMenuItemProps {
  subtask: ISubtask;
}

export const SubtaskMenuItem = ({ subtask }: SubtaskMenuItemProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(subtask.isCompleted);

  const toggleIsCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Container>
      <Checkbox
        type="checkbox"
        checked={isCompleted}
        onChange={toggleIsCompleted}
      />
      <Title $isCompleted={isCompleted}>{subtask.title}</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f4f7fd;
  padding: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  border-radius: 8px;
`;

const Checkbox = styled.input`
  height: 16px;
  width: 16px;
`;

const Title = styled.span<{ $isCompleted: boolean }>`
  font-size: 12px;
  line-height: 15px;
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
  text-decoration-color: #828fa3;
  font-weight: ${(props) => (props.$isCompleted ? "medium" : "bold")};
`;
