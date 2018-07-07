import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'

const CardComponent = (props) => {
  const { StyledContainer } = styles
  const { title } = props
  return (
    <StyledContainer>
      <p>{title}</p>
    </StyledContainer>
  )
}

CardComponent.defaultProps = {
  title: '',
}

CardComponent.propTypes = {
  title: PropTypes.string,
}

export default CardComponent
