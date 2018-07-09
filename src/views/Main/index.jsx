import React from 'react'
import HeaderBar from '../HeaderBar'
import Cards from '../Cards'
import Map from '../Map'
import * as styles from './styles'
import AppProvider from '../../helpers/provider'

const Main = () => {
  const { StyledContainer, StyledInnerContainer } = styles
  return (
    <AppProvider>
      <StyledContainer>
        <HeaderBar />
        <StyledInnerContainer>
          <Cards />
          <Map />
        </StyledInnerContainer>
      </StyledContainer>
    </AppProvider>
  )
}

export default Main
