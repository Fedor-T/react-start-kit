import React from 'react'
import styles from './Comment.scss'

export const CommentList = React.createClass({
  propTypes: {
    model: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <div className={styles.comment}>
        {this.props.model.user}:
        {this.props.model.comment}
      </div>
    )
  }
})

export default CommentList
