import {Chart} from 'react-google-charts';
import React from 'react';
import {ConvertedData1} from "./data.js";

const Barchart = () => (
   
        <div style ={{paddingLeft: "50px"}}>
            <Chart
            width={"95%"}
            height={"100%"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={ConvertedData1()}
            chartWrapperParams={{ view: { columns: [0, 2, 3] } }}
            options={{
          
            title: 'The number of positive and death in Japan',
            hAxis: { title: '感染者' },
            vAxis: { title: '死者' },
            chartArea: { width: '60%', height:'70%' },
            series: {
                0:{
                    axis:'test'
                }
            },
            hAxis: {
                title: 'Total Population',
                minValue: 0,
            },
            vAxis: {
            title: 'City',
            format:'decimal'
        },
        }}

        chartPackages={['corechart', 'controls']}
        controls={[
            {
                controlType: 'CategoryFilter',
                options:{
                    filterColumnIndex: 1,
                    ui:{
                        labelStacking: 'vertical',
                        label:'地域を選択',
                        allowTyping: false,
                        allowMultiple: false,
                    }
                }
            }
        ]}
    />
    </div>

);

export default Barchart;
  