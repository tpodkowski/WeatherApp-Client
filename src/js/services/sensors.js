import axios from 'axios';

const url = 'http://localhost:5000/api'

export const getSensorsList = () =>
  axios.get(`${url}/sensors`)
    .then(({data}) => data);

export const removeSensor = (id) =>
  axios.delete(`${url}/sensors/${id}`)
    .then(({data}) => data);
    
// export const getSensorData = async (sensors) => await axios.all(
//   sensors.map(async ({ id, name, url, measurements }) => {
//     const measurementsData = await axios.get(url, {
//       headers: {
//         'Accept': 'application/json'
//       }
//     }).then(data => console.log(data));

//     console.log({ measurementsData });
    
//     return {
//       id,
//       name,
//       ...url && { measurements: measurementsData },
//       ...measurements && { measurements },
//     };
//   })
// )
    