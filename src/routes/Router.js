import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from 'views/Home'
import Counter from 'views/Counter'

// use browserHistory for origin routing

const AppRouter = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/counter" component={Counter} />
      </Router>
    )
  }
})

export default AppRouter
