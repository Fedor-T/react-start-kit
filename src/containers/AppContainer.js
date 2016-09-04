import React from 'react'
import Router from 'routes/Router'
import store from 'store/Counter'

var AppContainer = React.createClass({
  componentDidMount () {
    this._listener = store.addListener('change', () => this.forceUpdate())
  },

  componentWillUnmount () {
    this._listener.remove()
  },
  render () {
    return (
      <div style={{ height: '100%' }}>
        <h2>Count: {store.count}</h2>
        <Router />
      </div>
    )
  }
})

export default AppContainer
