var User = require("../../models/user.js");
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


// Route for getting some data about our user to be used client side
// router.get("/user_data", function (req, res) {
//   if (!req.user) {
//     // The user is not logged in, send back an empty object
//     res.json({
//       success: false,
//     });
//   } else {
//     // Otherwise send back the user's email and id
//     // Sending back a password, even a hashed password, isn't a good idea
//     res.json({
//       _id: req.user.id,
//       username: req.user.username,
//       email: req.user.email,
//       success: true,
//       games: req.user.games,
//     });
//   }
// });

module.exports = router;
