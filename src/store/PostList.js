import _ from 'lodash'
import {EventEmitter} from 'fbemitter'
import Post from 'models/Post'

var PostList = function () {
  this.list = []
}

PostList.prototype = new EventEmitter()

_.extend(PostList.prototype, {
  addNewPost ({title}) {
    let post = new Post({title}, this)
    this.list.push(post)
    this.update()
  },

  update () {
    this.emit('change')
  }
})

export default new PostList()
