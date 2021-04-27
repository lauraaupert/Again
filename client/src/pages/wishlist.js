import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/";
import VideoBg from "../components/VideoBg";
import Wrapper from "../components/Wrapper";
import { List } from "../components/List"
import Results from "../components/Results";
import passport from "../utils/passport"
import axios from "axios"
import SearchBar from "../components/searchbar";



function WishlistPage() {
  const [authenticatedUser, setAuthenticatedUser] = useState({})

    passport.isAuthenticated()
    .then(res => {
      console.log(res.data.username)
        setAuthenticatedUser(res.data.username)
      })
        console.log(authenticatedUser)
    
  // function getGames(id) {
  //   return axios.get("/api/users/" + id);
  // },
  const [games, setGames] = useState({ results: [] });
  const [userSearch, setUserSearch] = useState("");

    // useEffect(() => searchGames(userSearch), []);

    function handleInputChange(event) {
        const { value } = event.target;
        console.log(value);
        setUserSearch(value);
    };
    // passport.getUser() 
    //   .then(res => {
    //     console.log(res.data.username)
    //   })
    // function searchGames(userSearch) {
    //   console.log(userSearch)
    //     API.searchTerms(userSearch)
        
    //         .then(res => {
    //           console.log(res.data.results)
    //             if (res.data === undefined) {
    //                 setGames({ results: [] });
    //             } else {
    //                 setGames({ results: res.data.results })
    //             }
    //         })
    //         .catch(err => console.log(err));
    // };

    function handleSearchSubmit(event) {
        event.preventDefault();
        console.log(userSearch)
         axios.get(
          "https://api.rawg.io/api/games?key=" + process.env.REACT_APP_APIKEY  + "&search=" + userSearch + "&limit=1"
        ).then(res => {
                    console.log(res.data.results)
                      if (res.data === undefined) {
                          setGames({ results: [] });
                          console.log(setGames)
                      } else {
                          setGames({ results: res.data.results })
                          console.log(setGames)
                      }
                  })
                  .catch(err => console.log(err));
          };

  return (
    <div>
      <Navbar />
      <VideoBg />
      <Wrapper>
        <h1>Hello!</h1>
      {games.results ?
        <List>
      {games.results.map(result => (
    <Results
    key={result.id}
    title={result.name}
    platform={result.platforms[0].platform.name}
    store={result.stores[0].store.name}
    image={result.background_image}
/>
    ))}
    </List> :
    (<h1></h1>)
      }
    </Wrapper>


      <SearchBar inputChange={handleInputChange} handler={handleSearchSubmit}/>

      <Wrapper>
      {games.results ?
        <List>
      {games.results.map(result => (
    <Results
    key={result.id}
    title={result.name}
    platform={result.platforms[0].platform.name}
    store={result.stores[0].store.name}
    image={result.background_image}
/>
    ))}
    </List> :
    (<h1></h1>)
      }
    </Wrapper>


    </div>
  );
  
}
export default WishlistPage;
