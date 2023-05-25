const router = require("express").Router();

const reaction = require('../controller/index').reactMethods;

router
  .route('/thoughts/:thoughtId/react').post(reaction.updateReact)


router
  .route('/thoughts/:thoughtId/react/:reactId').delete(reaction.deleteReact);

module.exports = router;