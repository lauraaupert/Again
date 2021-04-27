const router = require("express").Router();
// const gameRoutes = require("./games");
const authRoutes = require("./auth.js");
const user = require('./user.js')
// Book routes
// router.use("/api/games", gameRoutes);
router.use(authRoutes)
router.use(user)
module.exports = router;