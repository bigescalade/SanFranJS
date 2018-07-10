import styled from 'styled-components'
import theme from '../../styles/theme'
import { GlobalSubheading, GlobalParagraph } from '../../styles/global'

export const StyledContainer = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const StyledHeadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${theme.colorSecondary};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const StyledSubheading = GlobalSubheading.extend`
  color: ${theme.colorFontLight};
  text-align: center;
  padding: 10px;
`

export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const StyledParagraph = GlobalParagraph.extend`
  padding: 5px 10px;
  line-height: 1rem;
`

export const StyledBoldSpan = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`

export const StyledButton = styled.button`
  display: flex;
  padding: 5px 10px;
  margin: 10px;
`
