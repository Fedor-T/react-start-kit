import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = React.createClass({
  render () {
    return (
      <div>
        <h1>React Starter Kit</h1>
        <IndexLink to="/" activeClassName={classes.activeRoute}>
          Home
        </IndexLink>
        {' · '}
        <Link to="/counter" activeClassName={classes.activeRoute}>
          Counter
        </Link>
      </div>
    )
  }
})

export default Header
