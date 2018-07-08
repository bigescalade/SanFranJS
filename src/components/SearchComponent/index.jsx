import React, { Component } from 'react'
import uniq from 'lodash/uniq'
import fuzzy from 'fuzzy'
import ReactAutocomplete from 'react-autocomplete'
import request from '../../helpers/api'
import { AppContext } from '../../helpers/provider'
import * as styles from './styles'

class SearchComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      uniqueNames: [],
      uniqueNamesObjects: [],
    }

    this.boundUniqueNames = this.uniqueNames.bind(this)
  }

  componentWillMount() {
    this.boundUniqueNames()
  }

  uniqueNames() {
    const uniqueNameArray = []
    const uniqueNameObjectsArray = []
    const locations = request()

    locations.map(movie => uniqueNameArray.push(movie.title))
    uniq(uniqueNameArray).map(movieTitle => uniqueNameObjectsArray.push({ title: movieTitle }))

    this.setState({
      uniqueNamesObjects: uniqueNameObjectsArray,
      uniqueNames: uniq(uniqueNameArray),
    })
  }

  searchByTitle(searchQuery) {
    const { uniqueNames } = this.state
    const uniqueNameObjectsArray = []
    const fuzzySearch = fuzzy.filter(searchQuery, uniqueNames)

    fuzzySearch.map(movieTitle => uniqueNameObjectsArray.push({ title: movieTitle.string }))

    this.setState({ uniqueNamesObjects: uniqueNameObjectsArray, value: searchQuery })
  }

  render() {
    const { StyledContainer, StyledItemContainer } = styles
    const { uniqueNamesObjects, value } = this.state
    return (
      <StyledContainer>
        <AppContext.Consumer>
          {context => (
            <ReactAutocomplete
              items={uniqueNamesObjects}
              shouldItemRender={item => item.title.toLowerCase()}
              getItemValue={item => item.title}
              renderItem={item => <StyledItemContainer>{item.title}</StyledItemContainer>}
              value={value}
              onChange={(e) => {
                this.searchByTitle(e.target.value)
                context.updateSearch(e.target.value)
              }}
              onSelect={(selectedValue) => {
                this.setState({ value: selectedValue })
                context.updateSearch(selectedValue)
              }}
            />
          )}
        </AppContext.Consumer>
      </StyledContainer>
    )
  }
}

export default SearchComponent
