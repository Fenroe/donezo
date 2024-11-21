import { describe, expect, test } from "vitest";
import { getTaskCardSubheading } from "..";
import { ITask } from "../../data";

// test data
const noSubtasks: ITask = {
  title: "",
  description: "",
  status: "",
  subtasks: [],
};

const uncompleteSubtasks: ITask = {
  title: "",
  description: "",
  status: "",
  subtasks: [
    {
      title: "",
      isCompleted: false,
    },
    {
      title: "",
      isCompleted: false,
    },
    {
      title: "",
      isCompleted: false,
    },
  ],
};

const oneCompleteSubtask: ITask = {
  title: "",
  description: "",
  status: "",
  subtasks: [
    {
      title: "",
      isCompleted: true,
    },
    {
      title: "",
      isCompleted: false,
    },
    {
      title: "",
      isCompleted: false,
    },
  ],
};

const completeSubtasks: ITask = {
  title: "",
  description: "",
  status: "",
  subtasks: [
    {
      title: "",
      isCompleted: true,
    },
    {
      title: "",
      isCompleted: true,
    },
    {
      title: "",
      isCompleted: true,
    },
  ],
};

// tests
describe("getSubheading", () => {
  test("No subtasks", () => {
    expect(getTaskCardSubheading(noSubtasks)).toBe("0 of 0 subtasks");
  });

  test("No complete subtasks", () => {
    expect(getTaskCardSubheading(uncompleteSubtasks)).toBe("0 of 3 subtasks");
  });

  test("Some completed subtasks", () => {
    expect(getTaskCardSubheading(oneCompleteSubtask)).toBe("1 of 3 subtasks");
  });

  test("All completed subtasks", () => {
    expect(getTaskCardSubheading(completeSubtasks)).toBe("3 of 3 subtasks");
  });
});
