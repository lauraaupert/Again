// import React, { useState, useEffect } from "react";
// import SavedWrapper from "../../components/SavedWrapper";
// import SavedBooks from "../../components/SavedBooks";
// import API from "../../utils/API";
// import { List } from "../../components/List";

// function Saved() {

//     const [savedGames, setSavedGames] = useState([])

//     useEffect(() => getSavedGames(),
//         []);


//     function deleteGame(event) {
//         event.preventDefault();
//         const { id } = event.target;
//         API.deleteGame(id)
//             .then(res => getSavedGames())
//             .catch(err => console.log(err));
//     }

//     function getSavedGames() {
//         API.getSavedGames()
//             .then(res => {
//                 if (res.data === undefined) {
//                     setSavedGames([]);
//                 } else {
//                     setSavedGames(res.data)
//                 }
//             })
//             .catch(err => console.log(err));
//     };