const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

const router = express.Router()

router.route("/:userId").get(postController.getUserPosts) // get user posts.
router.route("/upload").post(upload.array("files[]"), postController.uploadPost) // get user posts.
router.route("/").get(postController.getPosts) // get user posts.

module.exports = router
