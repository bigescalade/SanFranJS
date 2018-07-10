import React from 'react'
import MapComponent from '../../components/MapComponent'
import * as styles from './styles'
import { AppContext } from '../../helpers/provider'

const Map = () => {
  const { StyledContainer } = styles

  function isLoading(context) {
    if (context.selectedMovie !== '' && context.geomArray.length === 0) {
      return true
    }

    return false
  }

  return (
    <AppContext.Consumer>
      {context => (
        <StyledContainer>
          <MapComponent loading={isLoading(context)} />
        </StyledContainer>
      )}
    </AppContext.Consumer>
  )
}

export default Map
