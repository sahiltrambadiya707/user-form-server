const express = require("express");
const user = require("../controllers/user");
const router = express.Router();

router
  .route("/user")
  .post(user.addUser)
  .put(user.updateUsers)
  .delete(user.deleteUser)
  .get(user.getUser);

module.exports = router;
