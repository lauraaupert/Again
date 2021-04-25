import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchbar";
import API from "../utils/API";
// import Table from "../components/Table"
import Results from "../components/Results";
import Wrapper from "../components/Wrapper"
import { List } from "../components/List"
import Navbar from "../components/navbar/index"
import VideoBg from "../components/VideoBg/index"
// import GameTable from "../components/Table";

function Landing() {


  const [games, setGames] = useState({ results: [] });
    const [userSearch, setUserSearch] = useState("");


    function handleInputChange(event) {
        const { value } = event.target;
        console.log(value);
        setUserSearch(value);
    };

    function searchGames() {
      console.log()
        API.searchTerms()
        
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
    // useEffect(() => searchGames("Among us"), []);

// const about = "about us"
//   API.searchTerms(about)
//   .then(function(result){
//     console.log(result)
//   })
  return (
    // <h1>Matt's sexy landing page</h1>
    <div>
    <Navbar/>
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

// 'use strict';

// import React, {Component} from 'react';

// class Example extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
//         }
//     }

//     render () {
//         return (
//             <video id="background-video" loop autoPlay>
//                 <source src={this.state.videoURL} type="video/mp4" />
//                 <source src={this.state.videoURL} type="video/ogg" />
//                 Your browser does not support the video tag.
//             </video>
//         )
//     }
// };

// export default Example;
