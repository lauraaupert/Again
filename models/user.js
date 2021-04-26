const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Game = require("./Game");
// const passportLocalMongoose = require('passport-local-mongoose');

const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"]
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please provide valid email"
    ]
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
  },

//OR 
  games: [
    {
  title: String,
//res.results[0].name
  platform: String,
//res.results[0].platforms[0].platform.name
//res.results[0].platforms[1].platform.name
  store: String,
//res.results[0].stores[0].store.name
//res.results[0].stores[1].store.name
  image: String,
//res.results[0].background_image
  date: { type: Date, default: Date.now }
    }
  ]
})
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}
  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
  })
  
  
  
  const User = mongoose.model("User", UserSchema);

// });

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
//DO WE NEED BCRYPT HERE
