/* eslint-disable */

import styled from 'styled-components'
import theme from '../../styles/theme'
import { GlobalHeading } from '../../styles/global'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colorPrimary};
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
`

export const StyledHeading = GlobalHeading.extend`
  color: ${theme.colorFontLight};
  margin-bottom: 20px;
`
