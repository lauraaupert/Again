import React from "react";


function Box(props) {
    return (
        <div className="container">

            {props.children}
        </div>
    )
};

export default Box;