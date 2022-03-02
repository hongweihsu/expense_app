import "./ChartBar.css";

const CharBar = (props) => {
  let barFillHeight = "0%";
  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* //style 可以根據數值呈現，透過把css寫成物件放進{}裡 */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default CharBar;
