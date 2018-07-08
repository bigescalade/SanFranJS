import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeaderBar from '../HeaderBar'
import Cards from '../Cards'
import Map from '../Map'
import * as styles from './styles'
import AppProvider from '../../helpers/provider'

const Main = () => {
  const { StyledContainer, StyledInnerContainer } = styles
  return (
    <AppProvider>
      <MuiThemeProvider>
        <StyledContainer>
          <HeaderBar />
          <StyledInnerContainer>
            <Cards />
            <Map />
          </StyledInnerContainer>
        </StyledContainer>
      </MuiThemeProvider>
    </AppProvider>
  )
}

export default Main
