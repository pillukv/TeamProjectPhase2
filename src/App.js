import React, { Component } from 'react';
import ChartItem from './components/ChartItem';
import BarChart from './components/BarChart.js';
import PieChart from './components/PieChart.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      chartHeading: [
        {
          title: 'Global Coffee Production',
          description: '2017 data provided by the United States Department of Agriculture allows us to explore global production of coffee by looking at volume of green beans grown, exported, imported and consumed.  You will discover two types of distinct coffee varieties. The Arabica, known for its refined sweet flavor and high acidity and the Robusta, known to have a bitter sharp flavor that produces some of the most desired top quality espresso.  Making famous the Italian Espresso with its thick and flavorful crema.  The Arabica variety makes up 60% of the coffee grown globally and almost exclusively represents the gourmet market.  This commodity often comes at a higher price point and tends to be overall a more fragile plant.  The Robusta variety makes up the other 37-40% of production and thought to provide a greater crop yield at a lower production price point.'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <main id="charts-container">
          <ChartItem chartHeading={this.state.chartHeading}/>
        </main>
      </div>
    );
  }
}

export default App;
