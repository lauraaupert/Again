import React from "react"
import Box from "../Box"
 
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