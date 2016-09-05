import React from 'react'
import styles from './Post.scss'
import Form from './Form'
import Comments from 'views/Comments'

export const Post = React.createClass({
  propTypes: {
    model: React.PropTypes.object.isRequired,
    newPost: React.PropTypes.bool
  },

  getInitialState () {
    return {
      edit: this.props.model.isNew
    }
  },

  _onSave () {
    this.setState({edit: false})
  },

  _edit () {
    this.setState({edit: true})
  },

  renderPost () {
    const {id, body, title} = this.props.model
    return (
      <div className={styles.post} name={`post_${id}`}>
        <a className="btn btn-default" onClick={this._edit}><span className="fa fa-edit" /></a>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: body}} />
        <Comments post={this.props.model} />
      </div>
    )
  },

  renderEditForm () {
    return (
      <Form model={this.props.model} onSave={this._onSave} />
    )
  },

  render () {
    return (
      this.state.edit ? this.renderEditForm() : this.renderPost()
    )
  }
})

export default Post
