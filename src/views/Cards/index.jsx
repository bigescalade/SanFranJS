import React, { Component } from 'react'
import uniq from 'lodash/uniq'
import CardComponent from '../../components/CardComponent'
import * as styles from './styles'
import request from '../../helpers/api'

class Cards extends Component {
  constructor() {
    super()
    this.state = {
      uniqueNames: [],
    }

    this.boundUniqueNames = this.uniqueNames.bind(this)
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

  render() {
    const { StyledContainer } = styles
    const { uniqueNames } = this.state
    return (
      <StyledContainer>
        {uniqueNames.map((title, index) => (
          <CardComponent key={`titleCard_${index.toString()}`} title={title} />
        ))}
      </StyledContainer>
    )
  }
}

export default Cards
