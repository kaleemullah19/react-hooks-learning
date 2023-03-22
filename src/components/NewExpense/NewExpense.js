import React from "react";
import useExpense from "../Providers/useExpense";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = () => {
  const expContext = useExpense();
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    expContext.addExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
