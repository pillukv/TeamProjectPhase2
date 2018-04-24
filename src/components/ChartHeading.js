import React, {Component} from 'react';

class ChartHeading extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.chartHeading[0].title}</h1>
                <p>{this.props.chartHeading[0].description}</p>
            </div>
        )
    }
}

export default ChartHeading;