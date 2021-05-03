const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

const router = express.Router()
const stream_router = express.Router()

router.route("/:userId").get(postController.getUserPosts) // get user posts.
router.route("/upload-form-data").post(upload.array("files[]"), postController.uploadPostFiles) // get user posts.
router.route("/upload-post-data").post(postController.uploadPost) // get user posts.
router.route("/").get(postController.getPosts) // get user posts.

stream_router.route("/:postId").get(postController.getPostImage)

module.exports = { router, stream_router }
