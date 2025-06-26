const express = require('express');
const router = express.Router();
const postController = require('./postController');
const authMiddleware = require('./authMiddleware');
const upload = require('./cloudinary').uploader;

router.post('/', authMiddleware.protect, upload.single('image'), postController.createPost);
router.get('/', authMiddleware.protect, postController.getPosts);
router.put('/:id/like', authMiddleware.protect, postController.likePost);
router.post('/:id/report', authMiddleware.protect, postController.reportPost);
router.delete('/:id', authMiddleware.protect, postController.deletePost);

module.exports = router;
