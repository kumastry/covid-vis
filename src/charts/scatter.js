import {Chart} from 'react-google-charts';
import React from 'react';
import {ConvertedData1, ConvertedData2,  ConvertedData3} from "./data.js";

const ScatterChart = () => {
    return (
      <div>
        <div>
        <Chart
  width={'90%'}
  height={'600px'}
  chartType="ScatterChart"
  loader={<div>Loading Chart</div>}
  data={ConvertedData1().map(data => {
      return [{f:data[0],v:data[2]}, data[3]]
  })}
  options={{
    legend:'none',
    title: "感染者と死者の相関図",
    hAxis: { title: '感染者' },
    vAxis: { title: '死者' },
  }}
/>
</div>
<div>
<Chart
  width={'90%'}
  height={'600px'}
  chartType="ScatterChart"
  loader={<div>Loading Chart</div>}
  data={ConvertedData2().map(data => {
      return [{f:data[0],v:data[2]}, data[3]];
  })}
  options={{
    legend:'none',
    title: "感染者と死者の相関図(東京都と大阪を除く)",
    hAxis: { title: '感染者' },
    vAxis: { title: '死者' },
  }}
/>
</div>


</div>
    );
}

export default ScatterChart;