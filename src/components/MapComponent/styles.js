/* eslint-disable */

import styled from 'styled-components'
import theme from '../../styles/theme'
import { GlobalHeading, GlobalSubheading, GlobalParagraph } from '../../styles/global'

export const StyledMapContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

export const StyledMapInnerContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`

export const StyledLoadingOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 50%;
  z-index: 1000000;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`

export const StyledLoadingText = GlobalHeading.extend`
  margin-top: 20px;
  color: ${theme.colorFontLight};
`

export const StyledContainer = styled.div`
  display: flex;
  width: ${props => (props.grow ? '200px' : 'auto')};
`

export const StyledMarker = styled.div`
  display: flex;
  width: 0;
  height: 0;
  border-top: 20px solid #f00;
  border-right: 10px solid transparent;
  border-bottom: 0px;
  border-left: 10px solid transparent;
  transition: 100ms linear all;

  &:hover {
    -ms-transform: rotate(-90deg);
    /* IE 9 */

    -webkit-transform: rotate(-90deg);
    /* Chrome, Safari, Opera */

    transform: rotate(-90deg);
    transition: 100ms linear all;

    cursor: pointer;
  }
`

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-left: 5px;
  padding: 5px 20px;
  border-radius: 5px;
  width: 250px;
  align-items: center;
  z-index: 100;
`

export const StyledInfoHeading = GlobalSubheading.extend`
  text-align: center;
`

export const StyledInfoText = GlobalParagraph.extend`
  text-align: center;
`
