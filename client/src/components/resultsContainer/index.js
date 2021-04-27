import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function ResultsContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: 'rgb(245 245 245 / 44%)', height: '75vh'}} />
      </Container>
    </React.Fragment>
  );
}