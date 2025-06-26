const authMiddleware = require('./authMiddleware');

exports.protect = authMiddleware.protect;
exports.restrictTo = (role) => {
  return (req, res, next) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }
    next();
  };
};
