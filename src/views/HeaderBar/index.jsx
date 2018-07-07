import React from 'react'
import * as styles from './styles'
import { GlobalHeading } from '../../styles/global'

const HeaderBar = () => {
  const { StyledContainer } = styles
  return (
    <StyledContainer>
      <GlobalHeading>SanFranJS</GlobalHeading>
    </StyledContainer>
  )
}

export default HeaderBar
