import React, { Component } from 'react'
import uniq from 'lodash/uniq'
import CardComponent from '../../components/CardComponent'
import * as styles from './styles'
import request from '../../helpers/api'
import AppProvider, { AppContext } from '../../helpers/provider'

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

    locations.forEach((movie) => {
      uniqueNameArray.push(movie.title)
    })

    this.setState({ uniqueNames: uniq(uniqueNameArray) })
  }

  filterByTitle(searchQuery) {
    const { uniqueNames } = this.state

    return uniqueNames
      .filter(title => title === searchQuery)
      .map((title, index) => <CardComponent key={`titleCard_${index.toString()}`} title={title} />)
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
