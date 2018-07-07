import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

const Map = (props) => {
  const { center, zoom } = props
  const { GOOGLE_MAPS_API_KEY } = process.env
  return <GoogleMapReact defaultCenter={center} defaultZoom={zoom} key={GOOGLE_MAPS_API_KEY} />
}

Map.defaultProps = {
  center: {
    lat: 37.77,
    lng: -122.43,
  },
  zoom: 11,
}

Map.propTypes = {
  center: PropTypes.shape,
  zoom: PropTypes.number,
}

export default Map
