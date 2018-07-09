import React, { Component } from 'react'
import uniq from 'lodash/uniq'
import fuzzy from 'fuzzy'
import CardComponent from '../../components/CardComponent'
import * as styles from './styles'
import request from '../../helpers/api'
import { AppContext } from '../../helpers/provider'

const locations = request()

class Cards extends Component {
  constructor() {
    super()
    this.state = {
      uniqueNames: [],
      showMoreDetails: false,
    }

    this.boundUniqueNames = this.uniqueNames.bind(this)
    this.boundFilterByTitle = this.filterByTitle.bind(this)
    this.boundHandleOnClick = this.handleOnClick.bind(this)
    this.boundUpdateContext = this.updateContext.bind(this)
  }

  componentWillMount() {
    this.boundUniqueNames()
  }

  handleOnClick(context, title) {
    const { showMoreDetails } = this.state
    this.setState({ showMoreDetails: !showMoreDetails }, this.boundUpdateContext(context, title))
  }

  updateContext(context, title) {
    return () => {
      const { showMoreDetails } = this.state
      const updatedTitle = showMoreDetails ? title : ''

      context.updateSearch(updatedTitle)
      context.selectMovie(updatedTitle)
    }
  }

  uniqueNames() {
    const uniqueNameArray = []

    locations.map(movie => uniqueNameArray.push(movie.title))
    this.setState({ uniqueNames: uniq(uniqueNameArray) })
  }

  filterByTitle(context, searchQuery) {
    const { uniqueNames, showMoreDetails } = this.state
    const fuzzySearch = fuzzy.filter(searchQuery, uniqueNames)

    return fuzzySearch.map((title, index) => (
      <CardComponent
        key={`titleCard_${index.toString()}`}
        title={title.string}
        onClick={() => this.boundHandleOnClick(context, title.string)}
        button={showMoreDetails ? 'back' : 'details'}
      />
    ))
  }

  render() {
    const { StyledContainer } = styles
    return (
      <StyledContainer>
        <AppContext.Consumer>
          {context => this.boundFilterByTitle(context, context.searchQuery)}
        </AppContext.Consumer>
      </StyledContainer>
    )
  }
}

export default Cards
