import React from "react"
import Box from "../Box"
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
 
function Wrapper(props) {

    return (
        <Box>
            <div className="jumbotron border border-dark p-2">
            <strong>Game Results</strong>
                <br />
                {props.children}
            </div>
        </Box>
    )
};

export default Wrapper;