import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: "330.23",
    date: new Date(2021, 3, 18),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "541.33",
    date: new Date(2021, 4, 8),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: "677.95",
    date: new Date(2021, 5, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); 不能直接這樣改寫，要用方程式
    setExpenses((prevExpenses) => {
      //set系列有prevState可以用
      return [expense, ...prevExpenses];
    });
  };

  return (
    //App > Expenses > ExpenseItem > Card > ExpenseDate
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
