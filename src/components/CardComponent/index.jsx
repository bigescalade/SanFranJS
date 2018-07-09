import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'

const CardComponent = (props) => {
  const { StyledContainer } = styles
  const {
    title, onClick, details, button,
  } = props
  return (
    <StyledContainer>
      <p>{title}</p>
      <p>{details}</p>
      <div onClick={onClick}>{button}</div>
    </StyledContainer>
  )
}

CardComponent.defaultProps = {
  title: '',
  details: '',
  button: '',
  onClick: () => {},
}

CardComponent.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  details: PropTypes.string,
  button: PropTypes.string,
}

export default CardComponent
