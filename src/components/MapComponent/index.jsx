import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import Marker from './marker'
import { AppContext } from '../../helpers/provider'

const MapComponent = (props) => {
  const { center, zoom } = props
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

  return (
    <AppContext.Consumer>
      {context => (
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        >
          {context.geomArray.map((geomObject, index) => (
            <Marker
              key={`marker${index.toString()}`}
              lat={geomObject.geom.lat}
              lng={geomObject.geom.lng}
              title={geomObject.title}
              text={geomObject.location}
            />
          ))}
        </GoogleMapReact>
      )}
    </AppContext.Consumer>
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
