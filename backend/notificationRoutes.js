const express = require('express');
const router = express.Router();
const notificationController = require('./notificationController');
const authMiddleware = require('./authMiddleware');

router.get('/', authMiddleware.protect, notificationController.getUserNotifications);
router.put('/read', authMiddleware.protect, notificationController.markAsRead);
router.delete('/', authMiddleware.protect, notificationController.clearNotifications);

module.exports = router;
