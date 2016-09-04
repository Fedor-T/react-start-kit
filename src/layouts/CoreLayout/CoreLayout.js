import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import 'styles/core.scss'

export const CoreLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render () {
    return (
      <div className="container text-center">
        <Header />
        <div className={classes.mainContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }

})

export default CoreLayout
