import axios from 'axios';

const url = 'http://localhost:5000/api'

export const getSensorsList = () =>
  axios.get(`${url}/sensors`)
    .then(({data}) => data);

export const removeSensor = id =>
  axios.delete(`${url}/sensors/${id}`)
    .then(({data}) => data);
    
export const addSensor = data =>
  axios.post(`${url}/sensors`, data)
    .then(({data}) => data);