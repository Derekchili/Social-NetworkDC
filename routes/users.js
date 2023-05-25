const routes = require("express").Router();

const user = require('../controller/index').userMethods;

routes
  .route('/')
  .get(user.getUsers)
  .post(user.createUser)

routes.route('/delete/:id').delete(user.deleteUser)

routes.route('/:id').get(user.getOneUser).put(user.updateUser)

module.exports = routes;