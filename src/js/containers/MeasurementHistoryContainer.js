import React, { Component } from 'react';
import { getSensorHistory } from '../services/sensors';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

class MeasurementHistoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurementsHistory: [],
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    getSensorHistory(id)
      .then(measurementsHistory => this.setState({
        measurementsHistory: measurementsHistory.splice(-200),
      }))
  }
  render() {
    const { measurementsHistory } = this.state;
    
    return measurementsHistory.length > 0 ? (
      <div>
        <ResponsiveContainer width="100%" height={550}>
          <LineChart width={750} height={550} data={measurementsHistory}
            margin={{ top: 50, right: 50, left: 50, bottom: 50 }}>
            <CartesianGrid strokeDasharray="1 5" />
            <XAxis dataKey="Date and time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Humidity" stroke="#8884d8" />
            <Line type="monotone" dataKey="Temperature" stroke="#82ca9d" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    ) : (
      <div>Loading</div>
    )
  }
}

export default MeasurementHistoryContainer;