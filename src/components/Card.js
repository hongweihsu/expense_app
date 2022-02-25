import "./Card.css";

//reusable wraper component
function Card(props) {
  //   console.log("-------");
  //   console.log(props);
  //   console.log("-------");
  const classes = "card " + props.className; // 把共通的card跟expense-Item加到每個child, 每個child也還是有自己的className
  return <div className={classes}>{props.children}</div>; //children 是react內建的
}

export default Card;
