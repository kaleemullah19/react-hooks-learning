import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ExpenseForm.css";

export const replaceCamelCaseWithSpaces = (str) =>
  str.replace(/\B([A-Z])\B/g, " $1");

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    console.log("title Changed", event.target.value);
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    console.log("amount Changed");
    setEnteredAmount(event.target.value);
  };
  const [startDate, setStartDate] = useState(new Date());
  // const dateChangeHandler = (event) => {
  //   console.log("date Changed");
  //   setStartDate(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(startDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setStartDate("");
  };
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const cancelHandler = () => {
    setShowExpenseForm(false);
  };
  const [btn, setBtn] = useState(false);

  const checkHandler = (prev) => {
    setBtn((prev) => !prev);
  };
  const [color, setColor] = useState("MediumVioletRed");
  var newButtonColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const addNewExpenseHandler = () => {
    setShowExpenseForm(true);
    setColor(newButtonColor);
  };

  return (
    <>
      {showExpenseForm && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__controls">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>

            <div className="new-expense__controls">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={enteredAmount}
              ></input>
            </div>

            <div className="new-expense__controls">
              <label>Date</label>
              {/* <input
                type="date"
                onChange={dateChangeHandler}
                value={startDate}
              ></input> */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>

            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </form>
      )}
      <button style={{ backgroundColor: color }} onClick={addNewExpenseHandler}>
        Add new Expense
      </button>
      <button
        style={{ backgroundColor: btn ? "gray" : "#40005d" }}
        disabled={btn}
      >
        Disabled Button
      </button>
      <input
        type="checkbox"
        onChange={() => checkHandler(btn)}
        data-testid="input-checkbox-checked"
      />
    </>
  );
};

export default ExpenseForm;
