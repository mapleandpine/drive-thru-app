import React, { Component } from 'react';

class Weather extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      weather: 25
    };
  }

  render() {
    function incrementWeather() {
      return this.setState(prevState => {
        return {
          weather: ++prevState.weather
        };
      });
    }

    return (
      <div>
        Current Weather: <span className="temp">{ this.state.weather }</span> degrees celsius
        <div className="hotter-button" onClick={incrementWeather.bind(this)}>Make it hotter</div>
      </div>
    );
  }
}

export default Weather;
