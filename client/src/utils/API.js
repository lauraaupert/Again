import axios from "axios";
const { REACT_APP_APIKEY } = process.env;


export default {

  searchTerms: query => {
    return axios.get(
      "https://api.rawg.io/api/games?key=" + process.env.REACT_APP_APIKEY || REACT_APP_APIKEY + "&search=" + query 
    )
},
  // Gets all saved games
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the game with the given id
  getGame: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the game with the given id
  // deleteGame: function (id) {
  //   return axios.delete("/api/users/" + id, gameData);
  // },
  // Saves a game to the database

  saveGame: function (id, gameData) {

    return axios.put("/api/users" + id, gameData);


  },

  // Saves a user to the database
  // getUsers: function() {
  //   return axios.get("/api/users");
  // },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
};
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
// Find code for the Search Page in Activity 10, week 20

// import React, { useState } from "react";
// import Result from "../../components/result";
// import API from "../../util/API";
// import Find from "../../components/Search";

// function Search(props) {
//   const [games, setGames] = useState({
//     gameList: [],
//   });
//   const [saveGames, setSaveGames] = useState({
//     saveGames: [],
//   });
//   const [typing, setTyping] = useState({
//     searchTerm: "",
//   });
//   const handleSave = function handleSave(gameData) {
//     API.saveGame(gameData);
//     setSaveGames({
//       ...saveGames,
//       savedGames: gameData,
//     });
//   };
//   const handleTyping = function handleTyping(event) {
//     event.preventDefault();
//     setTyping({
//       ...typing,
//       searchTerm: event.target.value,
//     });
//   };
//   const handleSubmit = function handleSubmit() {
//     API.googleSearch(typing.searchTerm).then(function (results) {
//       setGames({
//         ...games,
//         gameList: results.data.items,
//       });
//     });
//   };
//   return (
//     <div>
//       <Find handleSubmit={handleSubmit} handleTyping={handleTyping} />

//       {games.gameList.length > 0 ? (
//         <Result game={games.gameList} handleSave={handleSave} />
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }
// export default Search;
