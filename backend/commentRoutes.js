const express = require('express');
const router = express.Router();
const commentController = require('./commentController');
const authMiddleware = require('./authMiddleware');

router.post('/:postId', authMiddleware.protect, commentController.createComment);
router.get('/:postId', authMiddleware.protect, commentController.getComments);
router.post('/:id/report', authMiddleware.protect, commentController.reportComment);
router.delete('/:id', authMiddleware.protect, commentController.deleteComment);

module.exports = router;
