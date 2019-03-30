import axios from 'axios';

const url = 'http://localhost:5000/api'

export const getForecast = ({ lat, lng, days = 7 }) =>
  axios.get(`${url}/forecast`, { params: { lat, lng, days }})
    .then(({data}) => data)

export const getGif = ({ tag }) =>
  axios.get(`${url}/gif`, { params: { tag } })
    .then(({ data }) => data)