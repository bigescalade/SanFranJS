import React, { Component } from 'react'
import { AppContext } from '../../helpers/provider'
import * as styles from './styles'

class SearchComponent extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  render() {
    const { StyledContainer, StyledInput } = styles
    const { value } = this.state
    return (
      <StyledContainer>
        <AppContext.Consumer>
          {context => (
            <StyledInput
              onChange={(e) => {
                this.setState({ value: e.target.value })
                context.updateSearch(e.target.value)
              }}
              value={value}
              onFocus={() => this.setState({ value: '' })}
              placeholder="Enter a movie title"
            />
          )}
        </AppContext.Consumer>
      </StyledContainer>
    )
  }
}

export default SearchComponent
