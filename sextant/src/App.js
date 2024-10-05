import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Exhibit Happy!">Hi! This is the result of this.props.children of Exhibit Happy!</Exhibit>
                <Exhibit name="Exhibit Excited!"></Exhibit>
                <Exhibit name="Exhibit Positive!"></Exhibit>
            </div>
        );
    }
}

export default App;
