import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //props 在這裡拿到 saveExpenseDataHandler
  //每個componemt可以有自己的state
  const [enteredTitle, setEnteredTitle] = useState(""); //title一開始是空字串
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // 或是也可以寫成一個state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   }); //裡面放object

  //   const titleChangeHandler = (event) => {
  //     // setUserInput({
  //     //   ...userInput, // 先複製原本的state，取得所有項目
  //     //   enteredTitle: event.target.value, // 改寫目標項目
  //     // });
  //     // 下面這樣更安全，保證是最新的previous state
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, enteredAmount: event.target.value };
  //       });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, enteredDate: event.target.value };
  //       });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    //submit後重置回初始狀態，要配合input value做成two-way binding
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
          {/* 用value做 two-way binding */}
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* type=button 就不會送出表單 */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
