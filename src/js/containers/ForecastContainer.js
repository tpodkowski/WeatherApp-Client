import React, { Component } from 'react';
import Skycons from 'react-skycons';
import {
  getForecast,
} from '../services/forecast';

const getDateString = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const cap = number => number < 10 ? `0${number}` : number;
  return `${cap(date.getDay())}.${cap(date.getMonth() + 1)}.${date.getFullYear()}`
};

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      daily: null,
      city: null,
    }

    this.showPosition = this.showPosition.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }

  showPosition({ coords }) {
    const {
      latitude: lat,
      longitude: lng,
    } = coords;

    getForecast({ lat, lng })
      .then(({ daily }) => this.setState({ daily }));
  }

  render() {
    const {
      daily,
    } = this.state;

    return daily ? (
      <div>
        <div>
          <h1>{daily.summary}</h1>
        </div>
        <div className="forecast">
          <h3 className="forecast__title">Prognoza:</h3>
          <div className="forecast__container">
            {
              daily.data.map((day, index) => (
                <div className="forecast__panel" key={index}>
                  <Skycons
                    className="icon"
                    icon={day.icon.toUpperCase().split('-').join('_')}
                  />
                  <div>
                    <small>{day.time ? getDateString(day.time) : ''}</small>
                    <strong>{day.summary}</strong>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    ) : (<div>Loading...</div>);
  }
}

export default ForecastContainer;