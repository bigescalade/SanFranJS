/* eslint-disable */

import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
`

export const StyledMarker = styled.div`
  display: flex;
  width: 0;
  height: 0;
  border-top: 20px solid #f00;
  border-right: 10px solid transparent;
  border-bottom: 0px;
  border-left: 10px solid transparent;
  transition: 300ms linear all;

  &:hover {
    -ms-transform: rotate(-90deg);
    /* IE 9 */

    -webkit-transform: rotate(-90deg);
    /* Chrome, Safari, Opera */

    transform: rotate(-90deg);
    transition: 300ms linear all;
  }
`

export const StyledInfoText = styled.div`
  background-color: white;
  margin-left: 5px;
  padding: 5px 20px;
  border-radius: 5px;
`
