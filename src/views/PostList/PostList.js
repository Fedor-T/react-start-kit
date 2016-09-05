import React from 'react'
import styles from './PostList.scss'
import CoreLayout from 'layouts/CoreLayout'
import store from 'store/PostList'
import Post from 'views/Post'

export const PostList = React.createClass({
  _listener: null,
  componentDidMount () {
    this._listener = store.addListener('change', () => {
      this.forceUpdate()
    })
  },

  componentWillUnmount () {
    this._listener.remove()
  },

  render () {
    return (
      <CoreLayout {...this.props}>
        <div className={styles.post_list}>
          {store.list.map((post, i) => {
            return <Post key={i} model={post} />
          })}
        </div>
      </CoreLayout>
    )
  }
})

export default PostList
