import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import Marker from './marker'

const MapComponent = (props) => {
  const { center, zoom } = props
  const { GOOGLE_MAPS_API_KEY } = process.env

  return (
    <GoogleMapReact defaultCenter={center} defaultZoom={zoom} key={GOOGLE_MAPS_API_KEY}>
      <Marker lat={37.77} lng={-122.43} text="test marker" />
    </GoogleMapReact>
  )
}

MapComponent.defaultProps = {
  center: {
    lat: 37.77,
    lng: -122.43,
  },
  zoom: 12,
}

MapComponent.propTypes = {
  center: PropTypes.shape,
  zoom: PropTypes.number,
}

export default MapComponent
