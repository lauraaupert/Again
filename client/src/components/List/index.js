import React from "react";
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export function List({ children }) {
  return (
    <div className="list-overflow-container">
          <React.Fragment>
        <CssBaseLine>
        <Container fixed>
        <Typography component="div" style={{ backgroundColor: 'rgb(245 245 245 / 44%)', height: '75vh'}}>

      <ul className="list-group">{children}</ul>
      </Typography>
        
        </Container>
        </CssBaseLine>
        </React.Fragment>


    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}