import { ChangeEvent, useRef, useState } from "react";
import {
  AppButton,
  Dropdown,
  Modal,
  ModalHeader,
  ModalSubheading,
} from "../components";
import { styled } from "styled-components";

export const CreateTaskModal = () => {
  // helper
  const [_, setRender] = useState<boolean>(false);

  const forceRender = () => setRender((prev) => !prev);

  const [title, setTitle] = useState<string>("");

  const changeTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  const [description, setDescription] = useState<string>("");

  const changeDescription = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(evt.target.value);
  };

  const subtasksRef = useRef([""]);

  const addSubtask = () => {
    subtasksRef.current.push("");
    forceRender();
  };

  const removeSubtask = (index: number) => {
    if (subtasksRef.current.length <= 1) return;
    subtasksRef.current = subtasksRef.current.filter((_, i) => i !== index);
    forceRender();
  };

  const changeSubtask = (evt: ChangeEvent<HTMLInputElement>, index: number) => {
    subtasksRef.current[index] = evt.target.value;
  };

  const boards = ["Todo", "Doing", "Done"];

  const [status, setStatus] = useState<string>(boards[0]);

  const changeStatus = (evt: ChangeEvent<HTMLSelectElement>) => {
    setStatus(evt.target.value);
  };

  const generateDropdownOptions = (labels: string[]) => {
    return labels.map((label, idx) => {
      return {
        label,
        value: `${idx}`,
      };
    });
  };

  return (
    <Modal>
      <Container>
        <ModalHeader heading="Add New Task" />
        <ModalSubheading text="Title" />
        <Input
          type="text"
          value={title}
          onChange={changeTitle}
          placeholder="e.g. Take coffee break"
        />
        <ModalSubheading text="Description" />
        <TextArea
          value={description}
          onChange={changeDescription}
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        />
        <ModalSubheading text="Subtasks" />
        {subtasksRef.current.map((subtask, idx) => (
          <SubheadingControl key={idx}>
            <Input
              type="text"
              defaultValue={subtask}
              placeholder="e.g. Brew coffee"
              onChange={(evt) => changeSubtask(evt, idx)}
            />
            <DeleteTaskButton onClick={() => removeSubtask(idx)}>
              <Cross />
            </DeleteTaskButton>
          </SubheadingControl>
        ))}
        <AppButton
          text="+ Add New Subtask"
          variant="secondary"
          size="medium"
          isActive
          onClick={addSubtask}
        />
        <ModalSubheading text="Status" />
        <Dropdown
          options={generateDropdownOptions(boards)}
          onChange={changeStatus}
          value={status}
        />
        <AppButton
          text="Create Task"
          variant="primary"
          size="medium"
          isActive
          onClick={() => console.log("click")}
        />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dfe3e8;
  outline-color: #828fa3;
  padding: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 112px;
  border: 1px solid #dfe3e8;
  outline-color: #828fa3;
  padding: 16px;
  resize: none;
`;

const SubheadingControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const DeleteTaskButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
`;

const Cross = () => {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg">
      <g fill="#828FA3" fillRule="evenodd">
        <path d="M12.728 0l2.122 2.122L2.122 14.85 0 12.728z" />
        <path d="M0 2.122L2.122 0 14.85 12.728l-2.122 2.122z" />
      </g>
    </svg>
  );
};
