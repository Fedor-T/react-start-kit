import React from 'react'
import Router from 'routes/Router'

var AppContainer = React.createClass({
  render () {
    return (
      <div style={{ height: '100%' }}>
        <Router />
      </div>
    )
  }
})

export default AppContainer
