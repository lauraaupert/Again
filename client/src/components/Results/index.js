import React, {useContext} from "react";
// import Container from "./Container";
import API from "../../utils/API"
import authenticatedUserContext from '../../utils/authenticatedUserContext'


function Results(props) {
const {_id} = useContext(authenticatedUserContext)
    function saveGame(event) {
        event.preventDefault();
        alert("Saved " + props.title + "!")
        const data = {
            title: props.title,
            platform: props.platform,
            store: props.store,
            image: props.image,
            // link: props.link
        }
        API.saveGame(_id, data)
            .catch(err => console.log(err));
    }

    // function saveGame(event) {
    //     event.preventDefault();
    //     alert("Saved " + props.title + "!")
    //     const game = {
    //         title: props.title,
    //         platform: props.platform,
    //         store: props.store,
    //         image: props.image,
    //         // link: props.link
    //     }
    //     axios.post("http://localhost:3000/api/user_data", {game})
    // }
    function redirect(event) {
        event.preventDefault();
        if (props.store === "Steam") {
            window.location.href="https://www.store.steampowered.com/"
        } else if (props.store === "PlayStation Store"){
            window.location.href="https://store.playstation.com/en-us/latest"
        } else if (props.store === "Xbox Store"){
            window.location.href="https://www.xbox.com/en-US/games/all-games"
        } else if (props.store === "App Store"){
            window.location.href="https://www.apple.com/app-store/"
        } else if (props.store === "GOG"){
            window.location.href="https://www.gog.com/"
        } else if (props.store === "Nintendo Store"){
            window.location.href="https://www.nintendo.com/"
        } else if (props.store === "Xbox 360 Store"){
            window.location.href="https://www.marketplace.xbox.com/"
        } else if (props.store === "Google Play"){
            window.location.href="https://www.play.google.com/"
        } else if (props.store === "itch.io"){
            window.location.href="https://www.itch.io/"
        } else if (props.store === "Epic Games"){
            window.location.href="https://www.epicgames.com/"
        }
    }

    return (
        <tr>
        {/* <div className="row" style={{marginTop: "5px"}} > */}
            <td>
                <img 
                style={{width: "100px"}}
                alt={`${props.photo}`} 
                // src={"https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"}
                src={props.image} 
                />
            </td>
            {/* <div className="col-md"><img alt={`${props.fullName}`} src={props.photo} /></div> */}
            <td>{props.title}</td>
            <td>{props.platform}</td>
            <td>{props.store}</td>
            <td><button className="btn btn-info m-1" onClick={saveGame} type="button">Save</button></td>


            <td><button className="btn btn-info m-1" onClick={redirect} type="button"
            >{props.store}</button></td>


            {/* <td>{props.email}</td>
            <td>{props.nationality}</td>
            <td>{props.age}</td> */}

        </tr>
    )
};


// function Results(props) {

//     function saveGame(event) {
//         event.preventDefault();
//         alert("Saved " + props.title + "!")
//         const data = {
//             title: props.title,
//             platform: props.platform,
//             store: props.store,
//             image: props.background_image,
//             // link: props.link
//         }
//         API.saveGame(data)
//             .catch(err => console.log(err));
//     }

//     return (

 



//         <li className="list-group-item border border-dark p-2 m-2 p-1" style={{"fontSize": "20px", "color": "yellow"}}>
//                 <div className="row">
//                     <div className="col-4 text-right">
//                         {/* <a href={props.link}><button className="btn btn-info m-1" type="button">View</button></a> */}
//                         <button className="btn btn-info m-1" onClick={saveGame} type="button">Save</button>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-2">
//                         <img src={props.background_image} alt={props.title} />
//                     </div>
//                     <div className="col-10">
//                         {props.platform}
//                         {props.store}
//                         <br />
//                     </div>
//                 </div>

//         </li >
//     )
// };

export default Results;