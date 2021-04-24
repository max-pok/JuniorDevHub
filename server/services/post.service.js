const Post = require("../models/post.model")

class PostService {
  constructor() {}

  async getPostsById(user_id) {
    let posts = await Post.find({ user_id })
    return posts || []
  }

  async getPosts() {
    let posts = await Post.find()
    return posts || []
  }
}

module.exports = PostService
