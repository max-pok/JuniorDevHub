const Post = require("../models/post.model")
const { PostFile } = require("../models/file.model")
const fs = require("fs")
const path = require("path")

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

  async createPost(post, files) {
    if (files) {
      post = { ...post, img: files[0].filename || "" }
    }
    return await new Post(post).save()
  }

  async uploadPostFiles(files) {
    const fileStream = fs.createReadStream(path.join(__dirname, "/../uploads/", files[0].filename))
    const postFile = new PostFile()
    postFile.filename = files[0].filename
    await postFile.upload(fileStream)
    fileStream.close()
  }
}

module.exports = PostService
