const router = require('express').Router();

const friend = require('../controller/index').friendMethods;

router.route('/users/:userId/friends/:friendId').post(friend.updateFriend).delete(friend.deleteFriend)

module.exports = router;