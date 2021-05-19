import {Chart} from 'react-google-charts';
import React from 'react';
import {ConvertedData1} from "./data.js";

const GeoChart = () => {
    return(
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="GeoChart"
  data={[]}
  options={{
    region: 'JP',
    resoution: 'provinces'
  }}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  
  rootProps={{ 'data-testid': '2' }}
/>
    );
}

export default GeoChart;