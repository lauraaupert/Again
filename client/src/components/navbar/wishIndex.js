// For remaining pages after Login

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
    const NavStyle = {
    background: "#11e068",
    color: "black",
    fontvariant: "all-petite-caps",
  };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={NavStyle}>
            <Typography variant="h6" className={classes.title}>
            <h1 style={{textAlign: 'center', fontFamily: "Kaushan Script", margin:"auto"}}> GameDex </h1>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }