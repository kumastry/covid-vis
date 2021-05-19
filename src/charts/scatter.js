import {Chart} from 'react-google-charts';
import React from 'react';
import {ConvertedData1} from "./data.js";

const ScatterChart = () => {
    return (
        <Chart
  width={'90%'}
  height={'600px'}
  chartType="ScatterChart"
  loader={<div>Loading Chart</div>}
  data={ConvertedData1().map(data => {
      return [{f:data[0],v:data[2]}, data[3]]
  })}
  options={{
    title: "感染者と死者の相関図",
    hAxis: { title: '感染者' },
    vAxis: { title: '死者' },
  }}
/>
    );
}

export default ScatterChart;