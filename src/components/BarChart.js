import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
const coffeeData = require('./coffee.json');

class BarChart extends Component {
    constructor () {
        super();
        this.state = {
            year: 2017,
        }
    }

    changeYear = () => {
        var newYear = document.getElementById('productionyearselect').value
        console.log(newYear)
        this.setState({year: newYear})
    }

    getChartData() {
        var beanProductionYear = this.state.year;
        var yearArray = [];
        for (var i = 0; i < coffeeData.length; i++) {
            if (coffeeData[i].Market_Year == beanProductionYear) {
              yearArray.push(coffeeData[i])
            }
        }
        var beanProductionArray = [];
        const BEAN_PRODUCTION_CUTOFF = 3000;
        for (i = 0; i < yearArray.length; i++) {
          if (yearArray[i].Robusta_Production + yearArray[i].Arabica_production > BEAN_PRODUCTION_CUTOFF) {
            beanProductionArray.push(yearArray[i]);
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
        var chartData = {
            labels: beanProductionChartLabels,
            datasets: [
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
        }
        return chartData;
    }
    render() {
        return (
            <div>
                <form>
                    <select id="productionyearselect">
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                    </select>
                    <button id="yearinput" name="yearinput" type="button" onClick={this.changeYear}>View</button>
                </form>
                <Bar data={this.getChartData()} />
            </div>
        )
    }
}

export default BarChart;