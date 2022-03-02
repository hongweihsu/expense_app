import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //只要dp裡面的value做出新陣列
  const totalMaximum = Math.max(...dataPointValues); //max函數不吃陣列，所以要spread

  return (
    <div className="chart">
      {props.dataPoints.map(
        (
          dataPoint //等於ChartBar在迴圈裡，產生很多個
        ) => (
          <ChartBar
            key={dataPoint.label} //預設是每個data的label都獨一無二
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          ></ChartBar> //maxValue用來作分母，對所有data都應是同樣的數值
        )
      )}
    </div>
  );
};

export default Chart;
