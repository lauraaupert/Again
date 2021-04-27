import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
// import "../../components/searchbar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      textAlign: "-webkit-center",
      marginLeft: "500px",
      marginRight: "550px",
      width: "auto",
      marginTop: 150,
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchCard(props) {
  const classes = useStyles();

  return (
 
      <div className="form-group">
        <div className={classes.root}>
          <div className={classes.search}>
            <h1 style={{textAlign: 'center', background:"darkgreen", fontVariantCaps: "all-petite-caps"}}>     
                 
            Search for a game</h1>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
                            onChange={props.inputChange}
                        />
            <button
                type= "submit"            
              onClick={props.handler}
              id="Search"
              className="btn btn-info mt-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>

  );
}
