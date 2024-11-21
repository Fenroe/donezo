export interface ISubtask {
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  title: string;
  description: string;
  status: string;
  subtasks: ISubtask[];
}

export interface IColumn {
  name: string;
  tagColor: string;
  tasks: ITask[];
}

export interface IBoard {
  name: string;
  columns: IColumn[];
}

export interface IProjectData {
  boards: IBoard[];
}
