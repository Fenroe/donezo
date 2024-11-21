import { ITask } from "../data";

export const getTaskCardSubheading = (tasks: ITask) => {
  const totalSubtasks = tasks.subtasks.length;
  const completeSubtasks = tasks.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  return `${completeSubtasks} of ${totalSubtasks} subtasks`;
};
