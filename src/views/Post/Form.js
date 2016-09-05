import React from 'react'
import styles from './Post.scss'
const CKEDITOR = window.CKEDITOR

export const Form = React.createClass({
  propTypes: {
    model: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired
  },

  componentDidMount () {
    if (this.refs.editor) {
      this.instance = CKEDITOR.replace(this.refs.editor, {})
      this.instance.setData(this.props.model.body)
    }
  },

  _change (e) {
    this.props.model.title = e.currentTarget.value
    this.forceUpdate()
  },

  _save () {
    this.props.model.body = this.instance.getData()
    this.props.model.isNew = false
    this.instance.destroy()
    this.props.onSave && this.props.onSave()
  },

  render () {
    return (
      <div className={styles.post} name={`post_${this.props.model.id}`}>
        <input type="text" className="form-control" value={this.props.model.title} onChange={this._change} />
        <div ref="editor" className={styles.editor} />
        <a onClick={this._save} className="btn brn-success">Save</a>
      </div>
    )
  }
})
export default Form
