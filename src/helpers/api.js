import axios from 'axios'
import locations from './locations'

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

// export default function request(url, type) {
//   axios
//     .get(url)
//     .then((response) => {
//       switch (type) {
//         case 'map':
//           console.log(response.data)
//           break
//         case 'card':
//           console.log(response.data)
//           break
//         default:
//           break
//       }
//     })
//     .catch()
// }

export default function request() {
  return locations
}

export function geocode(location) {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_MAPS_API_KEY}`,
    )
    .then(response => response.data.results[0])
}
