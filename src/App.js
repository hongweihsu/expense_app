import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("addExpHandler in App.js");
    console.log(expense);
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
