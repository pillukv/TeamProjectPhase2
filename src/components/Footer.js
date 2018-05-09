import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <footer>
                <p>Data Visualization: The Global Coffee Trade</p>
                <p>Luke Pilon, Angie Toner, Will Pellegrene</p>
                <p>Sources:</p>
                <div id="sources">
                    <div className="source">
                    <a href="https://www.fas.usda.gov/data/coffee-world-markets-and-trade">USDA Coffee Trade Data</a>
                    </div>
                    <div className="source">
                    <a href="https://www.olympiacoffee.com/">Olympia Coffee</a>
                    </div>
                    <div className="source">
                    <a href="https://www.intelligentsiacoffee.com/learn-do/community/intelligentsia-direct-trade">Intelligentsia Coffee</a>
                    </div>
                    <div className="source">
                    <a href="http://www.bbc.com/future/story/20171106-the-disease-that-could-change-how-we-drink-coffee">BBC Article on Coffee Rust</a>
                    </div>
                    <div className="source">
                    <a href="https://driftaway.coffee/arabica-robusta/">Driftaway Coffee</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;