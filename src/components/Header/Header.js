import React from 'react'
import { IndexLink } from 'react-router'
import classes from './Header.scss'
import PostDispatcher from 'dispatchers/PostDispatcher'

export const Header = React.createClass({

  _newPost () {
    PostDispatcher.newPost()
  },

  render () {
    return (
      <div>
        <h1>React Starter Kit</h1>
        <IndexLink to="/" activeClassName={classes.activeRoute}>
          Home
        </IndexLink>
        {' · '}
        <a onClick={this._newPost}>
          New Post
        </a>
      </div>
    )
  }
})

export default Header
