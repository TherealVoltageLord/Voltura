const express = require('express');
const router = express.Router();
const adminController = require('./adminController');
const adminMiddleware = require('./adminMiddleware');

router.get('/stats', adminMiddleware.protect, adminMiddleware.restrictTo('admin'), adminController.getDashboardStats);
router.get('/users', adminMiddleware.protect, adminMiddleware.restrictTo('admin'), adminController.getUsers);
router.put('/users/:id/ban', adminMiddleware.protect, adminMiddleware.restrictTo('admin'), adminController.banUser);
router.put('/users/:id/promote', adminMiddleware.protect, adminMiddleware.restrictTo('admin'), adminController.promoteUser);
router.get('/reports', adminMiddleware.protect, adminMiddleware.restrictTo('admin'), adminController.getReports);
router.put('/reports/:id/handle', adminMiddleware.protect, adminMiddleware.restrictTo('admin'), adminController.handleReport);
router.post('/notify', adminMiddleware.protect, adminMiddleware.restrictTo('admin'), adminController.sendNotification);

module.exports = router;
