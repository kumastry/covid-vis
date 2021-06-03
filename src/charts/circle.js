import {Chart} from 'react-google-charts';
import React from 'react';
import {ConvertedData1} from "./data.js";

const PieChart = () => {
    return(
        <div className = "columns">
          <div className ="column" style ={{paddingLeft: "50px"}}> 
        <Chart
  width={'70%'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={ConvertedData1()}
  options={{
    title :"地域別感染者",
    legend: 'none',
    chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
    pieSliceText: 'label',
  }}
  rootProps={{ 'data-testid': '1' }}
  chartWrapperParams={{ view: { columns: [0, 2] } }}
  chartPackages={['corechart', 'controls']}
  controls={[
    {
      controlType: 'CategoryFilter',
      options: {
        filterColumnIndex: 1,
        ui: {
          labelStacking: 'vertical',
          label: '地域を選択肢:',
          allowTyping: false,
          allowMultiple: false,
        },
      },
    },
  ]}
/>
</div>

<div className="column" style ={{paddingLeft: "50px"}}>
<Chart
  width={'70%'}
  
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={ConvertedData1()}
  options={{
    title :"地域別死者",
    legend: 'none',
    chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
    pieSliceText: 'label',
  }}
  rootProps={{ 'data-testid': '1' }}
  chartWrapperParams={{ view: { columns: [0, 3] } }}
  chartPackages={['corechart', 'controls']}
  controls={[
    {
      controlType: 'CategoryFilter',
      options: {
        filterColumnIndex: 1,
        ui: {
          labelStacking: 'vertical',
          label: '地域を選択肢:',
          allowTyping: false,
          allowMultiple: false,
        },
      },
    },
  ]}
/>
</div>
</div>
    );
}

export default  PieChart;