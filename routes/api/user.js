var User = require("../../models/user");
const router = require("express").Router();

// Get the games from this user
router.get("/users/:id", function ({ id }, res) {
  User.findById(id).then((user) => {
    res.json(user.games);
  });
});

// Save the game from this user
router.put("/users/:id", function ({ id }, res) {
  User.findByIdAndUpdate(id, { $push: { games: req.body } }).then((user) => {
    res.json(user);
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", function (req, res) {
  User.create(req.body)
    .then((user) => {
      res.status(200).json(user).redirect("/");
    })
    .catch(function (err) {
      console.log(err);
      res.status(401).json(err).redirect("/login");
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/user_data"),
  function (req, res) {
    User.findOneAndUpdate(res.data.username, req.body).then(
      console.log(req.data)
    );
  };

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({
      success: false,
    });
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      email: req.user.email,
      success: true,
      games: req.user.games,
    });
  }
});
module.exports = router;
