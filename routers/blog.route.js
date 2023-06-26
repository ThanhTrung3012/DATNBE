const express = require('express')
const router = express.Router()
const upload = require('../middlewares/upload')
const verifyToken = require('../middlewares/verifyToken')
const blogController = require('../controllers/blogController')
const blogValidator = require('../validations/blogValidator')

router.get('/', verifyToken, blogController.getBlogs)
router.get('/popular', blogController.getPopularBlogs)
router.get('/:id', blogController.getBlogDetail)
router.post('/', verifyToken,upload.single('image'), blogValidator.create(), blogController.createBlog)
router.put('/:id', verifyToken,upload.single('image'), blogValidator.update(), blogController.updateBlog)
router.delete('/:id', verifyToken, blogController.deleteBlog)

module.exports = router
