import { useContext } from "react";
import { ExpenseContext } from "./ExpenseProvider";

const useExpense = () => useContext(ExpenseContext);

export default useExpense;
