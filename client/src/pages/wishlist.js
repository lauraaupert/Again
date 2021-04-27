import React, { useState } from "react";
import Navbar from "../components/Navbar/";
import VideoBg from "../components/VideoBg";
import Wrapper from "../components/Wrapper";
import { ListA } from "../components/List"
import Results from "../components/Results";
import passport from "../utils/passport"
import axios from "axios"
import SearchBar from "../components/searchbar";



function WishlistPage() {
  const [games, setGames] = useState({ results: [] });
  const [userSearch, setUserSearch] = useState("");

    useEffect(() => searchGames(userSearch), []);

    function handleInputChange(event) {
        const { value } = event.target;
        console.log(value);
        setUserSearch(value);
    };


    function searchGames() {
        console.log(userSearch)
         axios.get(
          "https://api.rawg.io/api/games?key=" + process.env.REACT_APP_APIKEY  + "&search=" 
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
    (<h1> </h1>)
      }
    </Wrapper>


      <SearchBar inputChange={handleInputChange} handler={handleSearchSubmit}/>

      {/* <Wrapper>
      {games.results ?
        <ListA>
      {games.results.map(result => (
    <Results
    key={result.id}
    title={result.name}
    platform={result.platforms[0].platform.name}
    store={result.stores[0].store.name}
    image={result.background_image}
/>
    ))}
    </ListA> :
    (<h1> </h1>)
      }
    </Wrapper>

 */}
    </div>
  );
  
}
export default WishlistPage;
