/*
  Inline labels editor

  Usage example:
  const Page = React.createClass({
    getInitialState () {
      return {
        value: 'Click to change...'
      }
    },

    _change (value) {
      this.setState({value})
    },

    render () {
      return (<LabelEditor value={this.state.value} onChange={this._change} />)
    }
  })

  Props:
    value: value
    onChange: will trigger when data changed
*/

import React from 'react'
import styles from './LabelEditor.scss'

export const LabelEditor = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      edit: false,
      value: this.props.value
    }
  },

  componentDidUpdate () {
    if (this.state.edit) {
      this.refs.editor.focus()
    }
  },

  renderText (value) {

  },

  renderEdit (value) {

  },

  render () {
    return (this.state.edit ? this.renderEdit() : this.renderText())
  }
})

export default LabelEditor
