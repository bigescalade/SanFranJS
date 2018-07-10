import React, { Component } from 'react'
import uniqWith from 'lodash/uniqWith'
import isEqual from 'lodash/isEqual'
import get from 'lodash/get'
import fuzzy from 'fuzzy'
import CardComponent from '../../components/CardComponent'
import * as styles from './styles'
import getMovies from '../../helpers/api'
import { AppContext } from '../../helpers/provider'

class Cards extends Component {
  constructor() {
    super()
    this.state = {
      uniqueMovies: [],
      showMoreDetails: false,
      loading: true,
    }

    this.boundUniqueMovies = this.uniqueMovies.bind(this)
    this.boundFilterByTitle = this.filterByTitle.bind(this)
    this.boundHandleOnClick = this.handleOnClick.bind(this)
    this.boundUpdateContext = this.updateContext.bind(this)
  }

  componentWillMount() {
    getMovies().then((locations) => {
      this.boundUniqueMovies(locations)
      this.setState({ loading: false })
    })
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

  uniqueMovies(locations) {
    const uniqueMovieArray = locations.map(movie => ({
      title: movie.title,
      actor1: movie.actor_1,
      actor2: movie.actor_2,
      actor3: movie.actor_3,
      director: movie.director,
      productionCompany: movie.production_company,
      releaseYear: movie.release_year,
      writer: movie.writer,
    }))
    this.setState({ uniqueMovies: uniqWith(uniqueMovieArray, isEqual) })
  }

  filterByTitle(context, searchQuery) {
    const { uniqueMovies, showMoreDetails } = this.state
    const { StyledHeading } = styles

    const options = {
      extract(element) {
        return element.title
      },
    }

    const fuzzySearch = fuzzy.filter(searchQuery, uniqueMovies, options)

    return fuzzySearch.length === 0 ? (
      <StyledHeading>Search results for {searchQuery} has 0 results</StyledHeading>
    ) : (
      fuzzySearch.map((title, index) => {
        const movie = uniqueMovies[index]
        return (
          <CardComponent
            key={`titleCard_${index.toString()}`}
            title={title.string}
            actors={`
            ${get(movie, 'actor1', '')}
            ${get(movie, 'actor2', '')}
            ${get(movie, 'actor3', '')}
          `}
            director={movie.director}
            productionCompany={movie.productionCompany}
            releaseYear={movie.releaseYear}
            writer={movie.writer}
            onClick={() => this.boundHandleOnClick(context, title.string)}
            button={showMoreDetails ? 'go back' : 'show on map'}
          />
        )
      })
    )
  }

  render() {
    const { loading } = this.state
    const { StyledContainer, StyledLoadingContainer, StyledHeading } = styles
    return (
      <StyledContainer>
        {loading ? (
          <StyledLoadingContainer>
            <StyledHeading>
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
            </StyledHeading>
            <StyledHeading>Loading</StyledHeading>
          </StyledLoadingContainer>
        ) : (
          <AppContext.Consumer>
            {context => this.boundFilterByTitle(context, context.searchQuery)}
          </AppContext.Consumer>
        )}
      </StyledContainer>
    )
  }
}

export default Cards
