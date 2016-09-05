import _ from 'lodash'
import {EventEmitter} from 'fbemitter'

var CommentList = function (post, comments = []) {
  this.post = post
  this.list = comments
}

CommentList.prototype = new EventEmitter()

_.extend(CommentList.prototype, {
  addComment () {
    // TODO: implement
  }
})

export default CommentList
