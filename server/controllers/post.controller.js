const PostService = require("../services/post.service")
const postService = new PostService()

const path = require("path")

/**
 * @Get
 */
const getUserPosts = async (req, res) => {
  const posts = await postService.getPostsById(req.params.userId)
  if (!posts) {
    res.status(400).send("No posts found.")
  } else {
    res.send(posts)
  }
}

/**
 * @Get
 */
const getPosts = async (req, res) => {
  const posts = await postService.getPosts()
  if (!posts) {
    res.status(400).send("No posts found.")
  } else {
    res.send(posts)
  }
}

/**
 * @Post
 */
const uploadPost = async (req, res) => {
  // Post Content Upload
  const post = await postService.createPost(req.body.post, req.files)
  if (post && req.files) {
    postService.uploadPostFiles(req.files)
  }
  res.status(200)
}

module.exports = { getUserPosts, getPosts, uploadPost }
