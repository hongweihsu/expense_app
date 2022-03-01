import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEdditing, setIsEdditing] = useState(false);

  const startEditingHandler = () => {
    setIsEdditing(true);
  };

  const stopEditingHandler = () => {
    setIsEdditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdditing(false); //所以送出表單後，表單會收起來
  };

  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* onSaveExpenseData 是當 submit form會觸發的 */}
      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
