import React from 'react'
import MapComponent from '../../components/MapComponent'
import * as styles from './styles'

const Map = () => {
  const { StyledContainer } = styles
  return (
    <StyledContainer>
      <MapComponent />
    </StyledContainer>
  )
}

export default Map
