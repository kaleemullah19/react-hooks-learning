import React from "react";
import useExpense from "../Providers/useExpense";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const { expenses } = useExpense();
  const mappedExpensesYear = expenses.map((item) => item.date.getFullYear());
  const filteredExpenseYear = mappedExpensesYear.filter(
    (item, curItem) => {

    return  mappedExpensesYear.indexOf(item) === curItem 
    }
  );
  console.log({filteredExpenseYear})
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/* <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option> */}
          {filteredExpenseYear.map((item,index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
