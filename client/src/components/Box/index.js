import React from "react";
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'


function Box(props) {
    return (
        <div className="container">

            {props.children}
        </div>
    )
};

export default Box;