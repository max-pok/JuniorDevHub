const PostService = require("../services/post.service")
const postService = new PostService()
const config = require("../config/mongoose.config")
const mongoose = require("mongoose")

const connect = mongoose.createConnection(config.url, config.options)
let gfs

connect.on("open", () => {
  // initialize GridFS
  gfs = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName: "posts",
  })
})

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
const uploadPostFiles = async (req, res) => {
  if (req.files.length == 0) {
    // No files to upload.
    res.send(null)
  } else {
    const postId = await postService.uploadPostFiles(req.files)
    if (!postId) {
      res.status(400).send("UPLOAD FAILED.")
    } else {
      res.send(postId)
    }
  }
}

/**
 * @Post
 */
const uploadPost = async (req, res) => {
  // Post Content Upload
  const post = await postService.createPost(req.body)
  if (!post) {
    res.status(400).send("UPLOAD FAILED.")
  } else {
    res.send(post)
  }
}

/**
 * @Get
 */
const getPostImage = async (req, res) => {
  const post = await postService.getPostInformation(req.params.postId)
  console.log(post)
  if (post) {
    await gfs.find({ _id: post.img[0] }).toArray((err, files) => {
      if (!files[0] || files.length === 0) {
        return res.status(200).json({
          success: false,
          message: "No post files available",
        })
      }
      // render image to browser
      gfs.openDownloadStream(post.img[0]).pipe(res)
    })
  } else {
    res.status(400).send("No such post.")
  }
}

module.exports = { getUserPosts, getPosts, uploadPostFiles, uploadPost, getPostImage }
