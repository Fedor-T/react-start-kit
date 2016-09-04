import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import CoreLayout from 'layouts/CoreLayout'

export const HomeView = React.createClass({
  render () {
    return (
      <CoreLayout {...this.props}>
        <div>
          <h4>Welcome!</h4>
          <img
            alt="This is a duck, because Redux!"
            className={classes.duck}
            src={DuckImage} />
        </div>
      </CoreLayout>
    )
  }
})

export default HomeView
