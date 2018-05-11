import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BarChart from './components/BarChart.js';
import PieChart from './components/PieChart.js';
import Footer from './components/Footer.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BarChart />, document.getElementById('barChart'));
ReactDOM.render(<PieChart />, document.getElementById('pieChart'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
