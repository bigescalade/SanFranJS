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
    const {
      StyledContainer,
      StyledMarker,
      StyledInfoContainer,
      StyledInfoHeading,
      StyledInfoText,
    } = styles
    const { showInfoWindow } = this.state
    const { title, text } = this.props

    return (
      <StyledContainer
        onMouseOver={this.boundHandleInfoWindow}
        onMouseOut={this.boundHandleInfoWindow}
        onBlur={this.boundHandleInfoWindow}
        onFocus={this.boundHandleInfoWindow}
        grow={showInfoWindow}
      >
        <StyledMarker />
        {!!showInfoWindow && (
          <StyledInfoContainer>
            <StyledInfoHeading>{title}</StyledInfoHeading>
            <StyledInfoText>{text}</StyledInfoText>
          </StyledInfoContainer>
        )}
      </StyledContainer>
    )
  }
}

Marker.defaultProps = {
  title: '',
  text: '',
}

Marker.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Marker
