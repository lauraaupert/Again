const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require("./routes/api/user.js")(app);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gamedex",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("DB connected!")
);

const userSeed = [
{
  email: "Arthur the Frog",

  password: "tadpole",
  name: "beta",
  games: [
    {
    title: "Among us",
    platform: "Dead",
    store: "glubby",
    image: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg"
    },
    {
      title: "yo",
      platform: "greeb",
      store: "gkghl",
      image: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
    }
  
  ]
}
]
db.User
  .find({})
  .then(() => db.User.create(userSeed))
  .then(data => {

    console.log(" records inserted!");

    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
