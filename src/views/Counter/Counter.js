import React from 'react'
import classes from './Counter.scss'
import CoreLayout from 'layouts/CoreLayout'
import store from 'store/Counter'

export const Counter = React.createClass({
  _increment () {
    store.increment()
    this.forceUpdate()
  },

  render () {
    return (
      <CoreLayout {...this.props}>
        <div>
          <h2 className={classes.counterContainer}>
            Counter:
            {' '}
            <span className={classes['counter--green']}>
              {store.count}
            </span>
          </h2>
          <button className="btn btn-default" onClick={this._increment}>
            Increment
          </button>
        </div>
      </CoreLayout>
    )
  }
})

export default Counter
