import React from 'react'
import SearchComponent from '../../components/SearchComponent'
import * as styles from './styles'

const HeaderBar = () => {
  const { StyledContainer, StyledHeading } = styles
  return (
    <StyledContainer>
      <StyledHeading>SanFranJS - a map of filming locations in San Francisco</StyledHeading>
      <SearchComponent />
    </StyledContainer>
  )
}

export default HeaderBar
