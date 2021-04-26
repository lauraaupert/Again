import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchbar";
import API from "../utils/API";
import Results from "../components/Results";
import Wrapper from "../components/Wrapper"
import VideoBg from "../components/VideoBg/index"

import { List } from "../components/List"
import Navbar from "../components/Navbar/index.js";



function Landing() {


  const [games, setGames] = useState({ results: [] });
  const [userSearch, setUserSearch] = useState("");

    // useEffect(() => searchGames(), []);

    function handleInputChange(event) {
        const { value } = event.target;
        console.log(value);
        setUserSearch(value);
    };

    function searchGames(query) {
      console.log(query)
        API.searchTerms(query)
        
            .then(res => {
              console.log(res.data.results)
                if (res.data === undefined) {
                    setGames({ results: [] });
                } else {
                    setGames({ results: res.data.results })
                }
            })
            .catch(err => console.log(err));
    };

    function handleSearchSubmit(event) {
        event.preventDefault();
        console.log(userSearch)
        searchGames(userSearch);
    };
  return (
    <div>
      <Navbar />
      <VideoBg />

    <SearchBar inputChange={handleInputChange} handler={handleSearchSubmit}/>
      <Wrapper>
      {games.results.length ?
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
    (<h1>Got nothing buddy</h1>)
      }
    </Wrapper>
    </div>
  );
}

export default Landing;
