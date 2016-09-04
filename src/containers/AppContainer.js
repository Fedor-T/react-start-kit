import React, { Component } from 'react'
import Router from 'routes/Router'

class AppContainer extends Component {
  render () {
    return (
      <div style={{ height: '100%' }}>
        <Router />
      </div>
    )
  }
}

export default AppContainer
