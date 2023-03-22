import React, { useState } from "react";
import useExpense from "../Providers/useExpense";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const filterChangehandler = (selectedYear) => {
    console.log("selectedYear", selectedYear);
    setYear(selectedYear);
  };
  const expContext = useExpense()

  const filteredExpense = expContext.expenses.filter((items) => {
    return items.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangehandler} />
        <ExpenseChart expenses={filteredExpense}></ExpenseChart>
        <ExpensesList items={filteredExpense}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
