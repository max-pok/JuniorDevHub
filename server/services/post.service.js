const Post = require("../models/post.model")
const { PostFile } = require("../models/file.model")
const fs = require("fs")
const path = require("path")
const mongoose = require("mongoose")

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

  async createPost(post, fileId) {
    if (fileId) {
      post = { ...post, img: fileId }
    }
    return await new Post(post).save()
  }

  async uploadPostFiles(files) {
    const fileStream = fs.createReadStream(path.join(__dirname, "/../uploads/", files[0].filename))
    const postFile = new PostFile()
    postFile.filename = files[0].filename
    const result = await postFile.upload(fileStream)
    fileStream.close()
    return result ? result._id : null
  }

  async getPostInformation(postId) {
    if (mongoose.Types.ObjectId.isValid(postId)) {
      const post = await Post.findById(postId)
      return post
    }
    return null
  }
}

module.exports = PostService
