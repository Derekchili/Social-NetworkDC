const router = require('express').Router();
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');
const friendRoutes = require('./friends');
const reactionRoutes = require('./reactions')

router.use('/users', userRoutes);

router.use('/thoughts', thoughtRoutes);

router.use(friendRoutes);

router.use(reactionRoutes);

module.exports = router;