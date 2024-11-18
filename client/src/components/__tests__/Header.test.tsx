import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Header } from "../Header";

describe("Header", () => {
  test("renders", () => {
    render(<Header boardName="name" active={true} />);
    expect(screen.getByTestId("header")).toBeDefined();
  });

  test("shows correct board name #1", () => {
    render(<Header boardName="Board Name" active={true} />);
    const boardName = screen.getByTestId("boardName");
    expect(boardName.textContent).toBe("Board Name");
  });

  test("show correct board name #2", () => {
    render(<Header boardName="Other Name" active={true} />);
    const boardName = screen.getByTestId("boardName");
    expect(boardName.textContent).toBe("Other Name");
  });
});
