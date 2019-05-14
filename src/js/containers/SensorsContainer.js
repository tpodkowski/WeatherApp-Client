import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  addSensor,
  getSensorsList,
  removeSensor,
} from '../services/sensors';
import AddSensorDialog from '../components/AddSensorDialog';

class SensorsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensors: [],
      isAddSensorModalOpen: false,
    }

    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.removeSensor = this.removeSensor.bind(this);
    this.onSensorAdd = this.onSensorAdd.bind(this);
    this.showHistory = this.showHistory.bind(this);
  }

  componentDidMount() {
    getSensorsList()
      .then((sensors) => this.setState({ sensors }));
  }

  removeSensor(id) {
    removeSensor(id)
      .then((sensors) => this.setState({ sensors }));
  }

  toggleAddModal() {
    const { isAddSensorModalOpen } = this.state;
    this.setState({
      isAddSensorModalOpen: !isAddSensorModalOpen,
    })
  }

  onSensorAdd(event) {
    event.preventDefault();
    const formData = {}
    
    new FormData(event.target).forEach((value, key) => {
      formData[key] = value;
    });
    
    addSensor(formData)
      .then(sensors => this.setState({
        sensors,
        isAddSensorModalOpen: false,
      }));
  }

  showHistory(id) {
    const { history } = this.props;
    history.push(`/history/${id}`)
  }

  render() {
    const {
      sensors,
      isAddSensorModalOpen,
    } = this.state;

    return sensors ? (
      <div className="sensors">
        {sensors.map(({ id, name, measurements }, index) => (
          <div key={index} className="sensors__item" onClick={() => this.showHistory(id)}>
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
        <button className="sensors__item-button" onClick={this.toggleAddModal}>
          <h1 className="sensors__item-icon">+</h1>
          <h1>Dodaj</h1>
        </button>
        <AddSensorDialog
          modalIsOpen={isAddSensorModalOpen}
          onSubmit={this.onSensorAdd}
          closeModal={this.toggleAddModal}
        />
      </div>
    ) : (
      <div data-icon="ei-spinner-3" data-size="m"></div>
    );
  }
};

export default withRouter(SensorsContainer);