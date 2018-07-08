import React from 'react'
import SearchComponent from '../../components/SearchComponent'
import * as styles from './styles'
import { GlobalHeading } from '../../styles/global'

const HeaderBar = () => {
  const { StyledContainer } = styles
  return (
    <StyledContainer>
      <GlobalHeading>SanFranJS</GlobalHeading>
      <SearchComponent />
    </StyledContainer>
  )
}

export default HeaderBar
