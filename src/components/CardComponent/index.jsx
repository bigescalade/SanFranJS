import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'

const CardComponent = (props) => {
  const {
    StyledContainer,
    StyledHeadingContainer,
    StyledDetailsContainer,
    StyledParagraph,
    StyledSubheading,
    StyledBoldSpan,
    StyledButton,
  } = styles
  const {
    title, actors, director, productionCompany, releaseYear, writer, button, onClick,
  } = props
  return (
    <StyledContainer>
      <StyledHeadingContainer>
        <StyledSubheading>{title}</StyledSubheading>
      </StyledHeadingContainer>
      <StyledDetailsContainer>
        <StyledParagraph>
          <StyledBoldSpan>Starring Actors: </StyledBoldSpan>
          {actors}
        </StyledParagraph>
        <StyledParagraph>
          <StyledBoldSpan>Directed by: </StyledBoldSpan>
          {director}
        </StyledParagraph>
        <StyledParagraph>
          <StyledBoldSpan>Production Company: </StyledBoldSpan>
          {productionCompany}
        </StyledParagraph>
        <StyledParagraph>
          <StyledBoldSpan>Released: </StyledBoldSpan>
          {releaseYear}
        </StyledParagraph>
        <StyledParagraph>
          <StyledBoldSpan>Written by: </StyledBoldSpan>
          {writer}
        </StyledParagraph>
      </StyledDetailsContainer>
      <StyledButton onClick={onClick}>{button}</StyledButton>
    </StyledContainer>
  )
}

CardComponent.defaultProps = {
  title: '',
  actors: '',
  director: '',
  productionCompany: '',
  releaseYear: '',
  writer: '',
  button: '',
  onClick: () => {},
}

CardComponent.propTypes = {
  title: PropTypes.string,
  actors: PropTypes.string,
  director: PropTypes.string,
  productionCompany: PropTypes.string,
  releaseYear: PropTypes.string,
  writer: PropTypes.string,
  button: PropTypes.string,
  onClick: PropTypes.func,
}

export default CardComponent
