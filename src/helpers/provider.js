/* eslint-disable */
import React, { Component } from 'react'
import getMovies, { geocode } from '../helpers/api'

export const AppContext = React.createContext()

class AppProvider extends Component {
  constructor() {
    super()

    this.state = {
      searchQuery: '',
      selectedMovie: '',
      updateSearch: text => {
        this.setState({ searchQuery: text })
      },
      selectMovie: value => {
        this.setState({ selectedMovie: value })
        getMovies().then(locations => this.boundGetMovieLocations(locations))
      },
      geomArray: [],
    }

    this.boundGetMovieLocations = this.getMovieLocations.bind(this)
    this.boundGetGeoms = this.getGeoms.bind(this)
  }

  componentWillMount() {
    getMovies().then(locations => this.boundGetMovieLocations(locations))
  }

  getMovieLocations(locations) {
    const { selectedMovie } = this.state

    if (selectedMovie) {
      const locationArray = locations
        .filter(loc => loc.title === selectedMovie && loc.locations)
        .map(filteredMovie => {
          const { title, locations } = filteredMovie
          return { title, location: locations }
        })

      this.boundGetGeoms(locationArray)
    }
  }

  getGeoms(locationArray) {
    const geomArray = []
    const promiseArray = locationArray.map(movie => {
      const promise = geocode(movie.location)
        .then(
          result =>
            !!result.geometry.location &&
            geomArray.push({
              title: movie.title,
              geom: result.geometry.location,
              location: result.formatted_address,
            }),
        )
        .catch(error => console.error(error))
      return promise
    })

    Promise.all(promiseArray).then(() => {
      this.setState({ geomArray })
    })
  }

  render() {
    return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>
  }
}

export default AppProvider
