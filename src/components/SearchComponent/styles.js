/* eslint-disable */

import styled from 'styled-components'
import theme from '../../styles/theme'

export const StyledContainer = styled.div`
  display: flex;
  height: 25px;
  width: 200px;
`

export const StyledItemContainer = styled.div`
  display: flex;
  height: auto;
  background: white;

  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`

export const StyledInput = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  font-family: ${theme.ubuntu};
  border-radius: 10px;
  padding: 5px;
`
