import React, {Component} from 'react';
import { Chart } from 'react-google-charts';
const coffeeData = require('./coffee.json');

class GeoChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        colorAxis: {colors: ['rgb(153,0,0)', 'White', 'rgb(68, 108, 20)']},
        datalessRegionColor: 'Gray',
      }
    }
  }
}

