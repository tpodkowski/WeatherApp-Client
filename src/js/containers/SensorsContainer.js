import React, { Component } from 'react';
import {
  getSensorsList,
  removeSensor,
} from '../services/sensors';

class SensorsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensors: [],
    }

    this.addSensor = this.addSensor.bind(this);
    this.removeSensor = this.removeSensor.bind(this);
  }

  componentDidMount() {
    getSensorsList()
      .then((sensors) => this.setState({ sensors }));
  }

  removeSensor(id) {
    removeSensor(id)
      .then((sensors) => this.setState({ sensors }));
  }

  addSensor() {
    alert('Dodaj');
  }

  render() {
    const {
      sensors,
    } = this.state;

    return sensors ? (
      <div className="sensors">
        {sensors.map(({ id, name, measurements }, index) => (
          <div key={index} className="sensors__item">
            <div className="sensors__action-buttons">
              <button className="sensors__remove-button" onClick={() => this.removeSensor(id)}>X</button>
            </div>
            <div>
              <h3 className="sensors__name">{name}</h3>
              <div>Temperatura: <strong>{Math.round(measurements.temperature)}°C</strong></div>
              <div>Wilgotność: <strong>{Math.round(measurements.humidity)}%</strong></div>
            </div>
          </div>
        ))}
        <button className="sensors__item-button" onClick={this.addSensor}>
          <h1 className="sensors__item-icon">+</h1>
          <h1>Dodaj</h1>
        </button>
      </div>
    ) : (
      <div data-icon="ei-spinner-3" data-size="m"></div>
    );
  }
};

export default SensorsContainer;