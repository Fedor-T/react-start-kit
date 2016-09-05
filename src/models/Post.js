import _ from 'lodash'
import {EventEmitter} from 'fbemitter'
import CommentList from 'store/CommentList'
var count = 1

var Post = function (attrs = {}, store) {
  this.store = store
  this.id = attrs.id || count
  this.isNew = true
  this.title = attrs.title || 'Post ' + count
  this.comments = new CommentList(this, attrs.comments || [{user: 'user', comment: 'Hello world!'}]) // test comment
  count++
}

Post.prototype = new EventEmitter()

_.extend(Post.prototype, {
  addComment () {
    // TODO: Implement
  },

  update () {
    this.store.update()
  }
})

export default Post
