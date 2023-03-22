import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpenseForm, { replaceCamelCaseWithSpaces } from "./ExpenseForm";

test("renders Expense form component", () => {
  render(<ExpenseForm />);
  const addNewExpense = screen.getByRole("button", {
    name: "Add new Expense",
  });

  expect(addNewExpense).toHaveStyle({ "background-color": "MediumVioletRed" });
  userEvent.click(addNewExpense);
  expect(addNewExpense).toHaveStyle({ "background-color": "MidnightBlue" });
  const addExpense = screen.getByRole("button", {
    name: "Add Expense",
  });
  expect(addExpense).toBeVisible();
});

test("initial condition", () => {
  render(<ExpenseForm />);
  const checkboxBtn = screen.getByRole("checkbox");
  const disabledBtn = screen.getByRole("button", { name: "Disabled Button" });
  userEvent.click(checkboxBtn);
  expect(disabledBtn).toBeDisabled();
  expect(disabledBtn).toHaveStyle({ "background-color": "gray" });
  userEvent.click(checkboxBtn);
  expect(disabledBtn).toBeInTheDocument();
  expect(disabledBtn).toHaveStyle({ "background-color": "#40005d" });
});

describe("replacing camel case color with space", () => {
  test("check red with red", () => {
    expect(replaceCamelCaseWithSpaces("red")).toBe("red");
  });
  test("check for one inner letter", () => {
    expect(replaceCamelCaseWithSpaces("camelCase")).toBe("camel Case");
  });
  test("check for multiple inner camel case letters", () => {
    expect(replaceCamelCaseWithSpaces("coffeeWithKaran")).toBe(
      "coffee With Karan"
    );
  });
});
