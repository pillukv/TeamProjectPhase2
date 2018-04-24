import React, {Component} from 'react';
import ChartHeading from './ChartHeading.js';
import BarChart from './BarChart.js';


class ChartItem extends Component {
    render(){
        return(
            <div className="chart-item">
                <ChartHeading chartHeading={this.props.chartHeading}/>
                <BarChart />
            </div>
        )
    }
}

export default ChartItem;