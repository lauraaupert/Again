import React from "react";
// import Container from "./Container";
import API from "../../utils/API";

function Results(props) {

    function saveGame(event) {
        event.preventDefault();
        alert("Saved " + props.title + "!")
        const data = {
            title: props.title,
            platform: props.platform,
            store: props.store,
            image: props.background_image,
            // link: props.link
        }
        API.saveGame(data)
            .catch(err => console.log(err));
    }

    return (
        <li className="list-group-item border border-dark p-2 m-2 p-1" style={{"fontSize": "20px", "color": "yellow"}}>
                <div className="row">
                    <div className="col-4 text-right">
                        {/* <a href={props.link}><button className="btn btn-info m-1" type="button">View</button></a> */}
                        <button className="btn btn-info m-1" onClick={saveGame} type="button">Save</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={props.background_image} alt={props.title} />
                    </div>
                    <div className="col-10">
                        {props.platform}
                        {props.store}
                        <br />
                    </div>
                </div>

        </li >
    )
};

export default Results;