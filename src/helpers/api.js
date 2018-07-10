import axios from 'axios'

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const GOOGLE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
const DATASF_MOVIE_LOCATION_API = 'https://data.sfgov.org/resource/wwmu-gmzc.json?$limit=2000'

export default function getMovies() {
  return axios.get(DATASF_MOVIE_LOCATION_API).then(response => response.data)
}

export function geocode(location) {
  return axios
    .get(`${GOOGLE_GEOCODE_URL}?address=${location}&key=${GOOGLE_MAPS_API_KEY}`)
    .then(response => response.data.results[0])
}
