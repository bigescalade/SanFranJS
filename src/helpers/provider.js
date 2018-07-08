import React, { Component } from 'react'

export const AppContext = React.createContext()

class AppProvider extends Component {
  constructor() {
    super()

    this.state = {
      searchQuery: '',
      updateSearch: (text) => {
        this.setState({ searchQuery: text })
      },
    }
  }

  render() {
    return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>
  }
}

export default AppProvider
