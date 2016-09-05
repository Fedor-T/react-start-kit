import store from 'store/PostList'

var dispatcher = {
  newPost () {
    store.addNewPost({title: 'New Post'})
  }

}

export default dispatcher
