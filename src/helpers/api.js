// import axios from 'axios'
import locations from './locations'

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
