/* eslint-disable */

import styled from 'styled-components'
import { GlobalHeading } from '../../styles/global'

export const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  align-content: flex-start;
`

export const StyledLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const StyledHeading = GlobalHeading.extend`
  margin-top: 20px;
`
