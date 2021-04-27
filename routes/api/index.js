const router = require("express").Router();
// const gameRoutes = require("./games");
const authRoutes = require("./auth");
const user = require('./user')
// Book routes
// router.use("/api/games", gameRoutes);
router.use(authRoutes)
router.use(user)
module.exports = router;