import { Modal, ModalHeader, SubtaskMenuItem } from "../components";
import { useAtomValue } from "jotai";
import { boardDataAtom, viewableTaskAtom } from "../state";
import styled from "styled-components";

export const ViewTaskModal = () => {
  const task = useAtomValue(viewableTaskAtom);

  const boardData = useAtomValue(boardDataAtom);

  const getColumns = () => {
    return boardData.columns.map((column) => column.name);
  };

  return (
    <Modal>
      <Container>
        <ModalHeader heading={task.title || ""} showOptionsButton />
        <Description>{task.description}</Description>
        <SubtasksHeading>
          Subtasks ({task.subtasks.length} of {task.subtasks.length})
        </SubtasksHeading>
        {task.subtasks.map((s) => (
          <SubtaskMenuItem key={s.title} subtask={s} />
        ))}
        <SubtasksHeading>Current Status</SubtasksHeading>
        <DropdownContainer>
          <StyledSelect value={task.status}>
            {getColumns().map((column) => (
              <Option key={column}>{column}</Option>
            ))}
          </StyledSelect>
          <ArrowIconContainer>
            <ArrowIcon src="/assets/icon-chevron-down.svg" />
          </ArrowIconContainer>
        </DropdownContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 23px;
  font-weight: medium;
  color: #828fa3;
`;

const SubtasksHeading = styled.h3`
  color: #828fa3;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  color: #000112;
  font-weight: medium;
  font-size: 13px;
  line-height: 23px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  appearance: none;
`;

const ArrowIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  pointer-events: none;
  transform: translateY(-50%);
  padding: 5px;
`;

const ArrowIcon = styled.img``;

const Option = styled.option`
  padding: 10px;
  font-size: 16px;
`;
