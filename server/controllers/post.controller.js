const PostService = require("../services/post.service")
const postService = new PostService()

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

module.exports = { getUserPosts, getPosts }
