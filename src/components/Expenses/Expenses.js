import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  //filter()會回傳另一個過濾過的陣列，原本的陣列還在
  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        {/* selected 可以收到state定義好的2020  */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
