import React from "react";
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { List } from '@material-ui/core/'
import { FixedSizeList } from 'react-window';

export function ListA({ children }) {
  return (
    <List className="list-overflow-container" className={"classes.root"}>
          <React.Fragment>
        <CssBaseLine>
        <Container fixed maxWidth={'sm'}>
        <Typography component="div" style={{ backgroundColor: 'rgb(245 245 245 / 44%)', height: '75vh'}}>

      <ul className={"classes.ul"}>{children}</ul>
      </Typography>
        
        </Container>
        </CssBaseLine>
        </React.Fragment>


    </List>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}