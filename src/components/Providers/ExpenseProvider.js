import React from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 95.12,
    date: new Date(2020, 8, 15),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export const ExpenseContext = React.createContext();

const ExpenseProvider = (props) => {
  const [expenses, setExpense] = React.useState(Dummy_Expenses);
  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => [expense, ...prevExpense]);
  };
  console.log("expenses", expenses);

  
  return (
    <>
      <ExpenseContext.Provider
        value={{ expenses, addExpenseHandler }}
      >
                {props.children}
      </ExpenseContext.Provider>
    </>
  );
};

export default ExpenseProvider;