import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // 這個props是title amount date
  // return 一定只能回一個tag
  return (
    //Card 拿的props是什麼？是一個物件包含className跟children array，其中children有兩個：ExpenseDate跟div
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
