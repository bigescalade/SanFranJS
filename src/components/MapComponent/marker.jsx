import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'

class Marker extends Component {
  constructor() {
    super()
    this.state = {
      showInfoWindow: false,
    }

    this.boundHandleInfoWindow = this.handleInfoWindow.bind(this)
  }

  handleInfoWindow() {
    const { showInfoWindow } = this.state
    this.setState({
      showInfoWindow: !showInfoWindow,
    })
  }

  render() {
    const { StyledContainer, StyledMarker, StyledInfoText } = styles
    const { showInfoWindow } = this.state
    const { text } = this.props

    return (
      <StyledContainer
        onMouseOver={this.boundHandleInfoWindow}
        onMouseOut={this.boundHandleInfoWindow}
        onBlur={this.boundHandleInfoWindow}
        onFocus={this.boundHandleInfoWindow}
      >
        <StyledMarker />
        {!!showInfoWindow && <StyledInfoText>{text}</StyledInfoText>}
      </StyledContainer>
    )
  }
}

Marker.defaultProps = {
  text: '',
}

Marker.propTypes = {
  text: PropTypes.string,
}

export default Marker
