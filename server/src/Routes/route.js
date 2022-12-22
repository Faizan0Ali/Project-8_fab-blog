const express = require("express")
const router = express.Router();
const blogController =require("../Controllers/blogController")


router.post("/postBlog", blogController.postBlog )

router.get("/getBlog", blogController.getBlog)

// router.delete("/blogs",mid.authenticate,BlogController.isdeleted)//by query

// router.delete("/blogs")

module.exports = router;