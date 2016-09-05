import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import PostList from 'views/PostList'

// use browserHistory for origin routing

const AppRouter = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={PostList} />
      </Router>
    )
  }
})

export default AppRouter
