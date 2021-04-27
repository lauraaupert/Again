var User = require("../../models/User");
const router = require("express").Router();

// Get the games from this user
router.get("/users/:id", function ({ id }, res) {
  User.findById(id).then((user) => {
    res.json(user);
  });
});

// Save the game from this user
router.put("/users/:id", function ({ params, body }, res) {
  User.findByIdAndUpdate(params.id, { $push: { games: body } }).then((user) => {
    res.json(user);
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error

module.exports = router;
