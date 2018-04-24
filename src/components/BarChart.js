import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
const data = require('./coffee.json');

class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: this.getData(this.props.year)
        }
    }

    static defaultProps = {
        year: 2017
    }

    getData(year){
        var chartData = {};

        var yearObjects = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].Market_Year === year) {
            yearObjects.push(data[i])
          }
        }

        var beanProductionArray = [];
        const BEAN_PRODUCTION_CUTOFF = 3000;
        for (i = 0; i < yearObjects.length; i++) {
          if (yearObjects[i].Robusta_Production + yearObjects[i].Arabica_production > BEAN_PRODUCTION_CUTOFF) {
            beanProductionArray.push(yearObjects[i]);
          } 
        }
        
        var beanProductionChartLabels = [];
        var beanProductionArabica = [];
        var beanProductionRobusta = [];
        for (i = 0; i < (beanProductionArray.length); i++) {
          beanProductionChartLabels.push(beanProductionArray[i].Country);
          beanProductionArabica.push(beanProductionArray[i].Arabica_production);
          beanProductionRobusta.push(beanProductionArray[i].Robusta_Production);
        }
      
        chartData.labels = beanProductionChartLabels;
        chartData.datasets = [
            {
                label: 'Arabica Bean Prouction',
                backgroundColor: 'rgba(153,0,0,.7)',
                borderColor: 'rgba(153,0,0,1)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(153,0,0,1)',
                data: beanProductionArabica
            },
            {
                label: 'Robusta Bean Production',
                backgroundColor: 'rgba(128,213,42,.7)',
                borderColor: 'rgba(128,213,42,1)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(128,213,42,1)',
                data: beanProductionRobusta
            }
        ]
      
        return chartData;
    }

    render(){
        return (
            <div className="chart">
                <Bar 
                    data = {this.state.chartData}
                />
            </div>
        )
    }
}

export default BarChart;