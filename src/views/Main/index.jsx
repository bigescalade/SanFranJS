import React from 'react'
import HeaderBar from '../HeaderBar'
import Cards from '../Cards'
import Map from '../Map'
import * as styles from './styles'

const Main = () => {
  const { StyledContainer, StyledInnerContainer } = styles
  return (
    <StyledContainer>
      <HeaderBar />
      <StyledInnerContainer>
        <Cards />
        <Map />
      </StyledInnerContainer>
    </StyledContainer>
  )
}

export default Main
