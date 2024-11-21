import { ITask } from "../data";
import { styled } from "styled-components";
import { getTaskCardSubheading } from "../utils";
import { useAtom } from "jotai";
import { isModalVisibleAtom, viewableTaskAtom } from "../state";

interface TaskCardProps {
  task: ITask;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const [_, setViewableTask] = useAtom(viewableTaskAtom);
  const [modalIsVisible, setModalIsVisible] = useAtom(isModalVisibleAtom);

  const onClick = () => {
    if (modalIsVisible) {
      return;
    }
    setViewableTask(task);
    setModalIsVisible(true);
  };

  return (
    <CardContainer onClick={onClick}>
      <Heading>{task.title}</Heading>
      <Subheading>{getTaskCardSubheading(task)}</Subheading>
    </CardContainer>
  );
};

const CardContainer = styled.button`
  padding: 18px;
  width: 280px;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  border: none;
  text-align: left;
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #000112;
`;

const Subheading = styled.h3`
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #828fa3;
`;
