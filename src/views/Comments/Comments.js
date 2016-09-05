import React from 'react'
import styles from './Comments.scss'
import Comment from 'views/Comment'

export const CommentList = React.createClass({
  propTypes: {
    post: React.PropTypes.object.isRequired
  },

  renderForm () {
     // TODO: implement form
    return (
      <div>
        <textarea />
        <a className="btn btn-default">Add Comment</a>
      </div>
    )
  },

  render () {
    let comments = this.props.post.comments

    return (
      <div className={styles.comment_list}>
        <div>Comments:</div>
        {comments.list.map((comment, i) => {
          return <Comment key={i} model={comment} />
        })}
        {this.renderForm()}
      </div>
    )
  }
})

export default CommentList
