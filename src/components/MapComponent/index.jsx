import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import Marker from './marker'
import { AppContext } from '../../helpers/provider'
import * as styles from './styles'

const MapComponent = (props) => {
  const {
    StyledMapContainer,
    StyledMapInnerContainer,
    StyledLoadingOverlay,
    StyledLoadingText,
  } = styles
  const { center, zoom, loading } = props
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

  return (
    <AppContext.Consumer>
      {context => (
        <StyledMapContainer>
          {loading && (
            <StyledLoadingOverlay>
              <StyledLoadingText>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
              </StyledLoadingText>
              <StyledLoadingText>Loading</StyledLoadingText>
            </StyledLoadingOverlay>
          )}
          <StyledMapInnerContainer>
            <GoogleMapReact
              defaultCenter={center}
              defaultZoom={zoom}
              bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
            >
              {context.geomArray.map((geomObject, index) => {
                const { geom, title, location } = geomObject
                const { lat, lng } = geom
                return (
                  <Marker
                    key={`marker${index.toString()}`}
                    lat={lat}
                    lng={lng}
                    title={title}
                    text={location}
                  />
                )
              })}
            </GoogleMapReact>
          </StyledMapInnerContainer>
        </StyledMapContainer>
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
  loading: false,
}

MapComponent.propTypes = {
  center: PropTypes.shape,
  zoom: PropTypes.number,
  loading: PropTypes.bool,
}

export default MapComponent
