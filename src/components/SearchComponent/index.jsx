import React from 'react'
import TextField from 'material-ui/TextField'
import AppProvider, { AppContext } from '../../helpers/provider'
import * as styles from './styles'

const SearchComponent = () => {
  const { StyledContainer } = styles
  return (
    <StyledContainer>
      <AppContext.Consumer>
        {context => <TextField onChange={input => context.updateSearch(input.target.value)} />}
      </AppContext.Consumer>
    </StyledContainer>
  )
}

SearchComponent.defaultProps = {}

SearchComponent.propTypes = {}

export default SearchComponent
