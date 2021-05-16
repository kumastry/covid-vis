import {Chart} from 'react-google-charts';
import React from 'react';


const Barchart = () => (
   
        <div>
            <Chart
            width="90%"
            height={600}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
            title: 'positive number of Japan',
            chartArea: { width: '60%' },
            hAxis: {
                title: 'Total Population',
                minValue: 0,
            },
            vAxis: {
            title: 'City',
        },
        }}
    />
    </div>

);

export default Barchart;
  