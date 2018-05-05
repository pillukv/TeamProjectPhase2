import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
const data = require('./coffee.json');

//Create an array of data objects from 2017, as this chart will only be displaying data for that year.     
var array2017 = [];
for (var i = 0; i < data.length; i++) {
    if (data[i].Market_Year === 2017) {
        array2017.push(data[i]);
    }
}; 

//Function for sorting array2017 by the Bean_Import property, using a Bubble Sort algorithm
function bubbleSort(array){
    var length = array.length;
    for (i = 0; i < length; i++) { //number of passes through the array of values
        for (var x = 0; x < length - i - 1; x++){
            if (array[x].Bean_Import < array[x+1].Bean_Import){
            var temp = array[x];
            array[x] = array[x+1];
            array[x+1] = temp;
            }
        }
    }
}
bubbleSort(array2017);

//Creating array of values for the bean import chart
//Since we only want the chart to display data for the largest importers, we have a selected a "cutoff value."  
//Any country that imports an amount of beans greater than the cutoff value will be displayed individually in the chart.
//Any country below the cutoff amount will be placed into an 'other' category that will also be displayed.
var beanImportChartData = [];
const beanImportCutoff = 1300
var otherTotal = 0; 
for (i = 0; i < array2017.length; i++) {
    if (array2017[i].Bean_Import > beanImportCutoff) {
    beanImportChartData.push(array2017[i].Bean_Import);
    } else {
    otherTotal = otherTotal + array2017[i].Bean_Import;
    }
}
beanImportChartData.push(otherTotal);  

//Array of labels that is linked with the values in the data array.
//All values except the last ('Other') come from the coffee data objects.
var beanImportChartLabels = [];
for (i = 0; i < (beanImportChartData.length - 1); i++) {
    beanImportChartLabels.push(array2017[i].Country);
}
beanImportChartLabels.push('Other');

var chartData = {
    labels: beanImportChartLabels,
    datasets: [
        {
        backgroundColor: ['#D60000', '#D64700', '#D68F00', '#D6D600', '#8FD600', '#47D600', '#00D600', '#00D647', '#00D68F', '#00D6D6', '#008FD6', '#0047D6'],
        data: beanImportChartData
        }
    ]
    }


class PieChart extends Component {
    render(){
        return (
            <div className="chart">
                <Pie data={chartData} />
            </div>
        )
    }
}

export default PieChart;