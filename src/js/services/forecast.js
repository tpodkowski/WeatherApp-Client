import axios from 'axios';

const url = 'https://desolate-waters-33760.herokuapp.com/api'

export const getForecast = ({ lat, lng, days = 7 }) =>
  axios.get(`${url}/forecast`, { params: { lat, lng, days }})
    .then(({data}) => data)

export const getGif = ({ tag }) =>
  axios.get(`${url}/gif`, { params: { tag } })
    .then(({ data }) => data)