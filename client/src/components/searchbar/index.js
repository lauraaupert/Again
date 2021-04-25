import React, { Fragment } from "react";
import Box from "../Box"

export default function SearchBar(props) {
  return (
    <Box>
      <div className="jumbotron border border-dark p-2">
                Game Search
<form className="search" >
                    <div className="form-group text-right">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your search"
                            id="game"
                            onChange={props.inputChange}
                        />
                        <button type="submit" onClick={props.handler} className="btn btn-info mt-2">Submit</button>
                    </div>
                </form >
                </div>
                </Box>
  )}
