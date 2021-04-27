import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchbar";
import API from "../utils/API";
import Results from "../components/Results";
import Wrapper from "../components/Wrapper"
import VideoBg from "../components/VideoBg/index"
import SearchCard from "../components/searchCard";
import { List } from "../components/List"
import Navbar from "../components/Navbar/index.js";
import axios from "axios"



function Landing() {


  const [games, setGames] = useState({ results: [] });
  const [userSearch, setUserSearch] = useState("");

    // useEffect(() => searchGames(userSearch), []);

    function handleInputChange(event) {
        const { value } = event.target;
        console.log(value);
        setUserSearch(value);
    };


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

      <SearchCard inputChange={handleInputChange} handler={handleSearchSubmit}/>      <Wrapper>
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

export default Landing;
