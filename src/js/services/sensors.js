import axios from 'axios';

const url = 'https://desolate-waters-33760.herokuapp.com/api'

export const getSensorsList = () =>
  axios.get(`${url}/sensors`)
    .then(({data}) => data);

export const removeSensor = id =>
  axios.delete(`${url}/sensors/${id}`)
    .then(({data}) => data);
    
export const addSensor = data =>
  axios.post(`${url}/sensors`, data)
    .then(({data}) => data);

export const getSensorHistory = id =>
  axios.get(`${url}/history/${id}`)
    .then(({data}) => data);