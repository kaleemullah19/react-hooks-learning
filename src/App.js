import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseProvider from "./components/Providers/ExpenseProvider";

const App = () => {
  // const items = [
  //   {
  //     name: "bike",
  //     amount: 100,
  //   },
  //   { name: "tv", amount: 130 },
  //   { name: "phone", amount: 190 },
  //   { name: "bills", amount: 80 },
  // ];
  // const result = items.some((item) => item.amount <= 100);
  // console.log({ result });

  // const result1 = items.reduce((currentTotal, item) => {
  //   return currentTotal + item.amount;
  // }, 0);
  // console.log({ result1 });

  const data = [1, 2, 5, 7, 3, 11];
  console.log(data.includes(2));
  return (
    <div>
      <ExpenseProvider>
        <NewExpense />
        <Expenses />
      </ExpenseProvider>
    </div>
  );
};

export default App;
