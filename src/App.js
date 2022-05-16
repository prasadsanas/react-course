import React, { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
