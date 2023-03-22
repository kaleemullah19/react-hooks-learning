import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
  return (
    <ul className="expenses-list">
      {
        props.items.map((Expense) => (
          <ExpenseItem
            key={Expense.id}
            title={Expense.title}
            amount={Expense.amount}
            date={Expense.date}
          />
        ))}
   </ul>
  );
};

export default ExpensesList;
