import React, { Component } from 'react'
import uniq from 'lodash/uniq'
import fuzzy from 'fuzzy'
import CardComponent from '../../components/CardComponent'
import * as styles from './styles'
import request from '../../helpers/api'
import { AppContext } from '../../helpers/provider'

class Cards extends Component {
  constructor() {
    super()
    this.state = {
      uniqueNames: [],
    }

    this.boundUniqueNames = this.uniqueNames.bind(this)
    this.boundFilterByTitle = this.filterByTitle.bind(this)
  }

  componentWillMount() {
    this.boundUniqueNames()
  }

  uniqueNames() {
    const uniqueNameArray = []
    const locations = request()

    locations.map(movie => uniqueNameArray.push(movie.title))

    this.setState({ uniqueNames: uniq(uniqueNameArray) })
  }

  filterByTitle(searchQuery) {
    const { uniqueNames } = this.state
    const fuzzySearch = fuzzy.filter(searchQuery, uniqueNames)

    return fuzzySearch.map((title, index) => (
      <CardComponent key={`titleCard_${index.toString()}`} title={title.string} />
    ))
  }

  render() {
    const { StyledContainer } = styles
    return (
      <StyledContainer>
        <AppContext.Consumer>
          {context => this.boundFilterByTitle(context.searchQuery)}
        </AppContext.Consumer>
      </StyledContainer>
    )
  }
}

export default Cards
