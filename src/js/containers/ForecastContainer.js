import React, { Component } from 'react';
import Skycons from 'react-skycons';
import {
  getForecast,
  getGif,
} from '../services/forecast';

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
      latitude,
      longitude,
    } = coords;

    getForecast({
      lat: latitude,
      lng: longitude,
    }).then((response) => {
      // const {
      //   daily,
      //   currently,
      // } = response;
      // console.log(response);
      // this.setState({
      //   daily: daily,
      // });

      // getGif({
      //   tag: currently.summary,
      // }).then(({ data }) => this.setState({ imageUrl: data.image_url }))
    });

  }

  render() {
    const {
      daily,
      imageUrl,
    } = this.state;
    
    return daily ? (
      <div>
        <h1>{daily.summary}</h1>
        <div>
          <img src={imageUrl} alt="" />
        </div>
        {
          daily.data.map((day, index) => (
            <div className="forecast-panel" key={index}>
              <div>
                <small>{day.time}</small>
                <small>{day.summary}</small>
                <Skycons
                  className="icon"
                  icon={day.icon.toUpperCase().split('-').join('_')}
                />
              </div>
            </div>
          ))
        }
      </div>
    ) : (<div>Loading...</div>);
  }
}

export default ForecastContainer;