import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import Checkbox from '@material-ui/core/Checkbox';
import passport from "../../utils/passport";

const Signup = ({ setIsAuthenticatedUser}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const paperStyle = { padding: 20, width: 300, height: "62vh", margin: "0 auto", borderRadius: "20px" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: "black" }
  const btnStyle = { backgroundColor: "black", color: "white", margin: "8px 0" }
  const marginTop = { marginTop: 10 }
  async function signup(e) {
    e.preventDefault();

    passport.signUp(email, password, username).then(response =>{
      if (response.status === 200) {
        setIsAuthenticatedUser(true)
      }
    })
  }
  return (
    <Grid>
      <Paper className="image" style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
          </Avatar>
          <h2 style={headerStyle}>Sign up</h2>
          <Typography variant="caption" gutterbottom>
            Please fill this form to create an account
        </Typography>
        </Grid>
        <form onSubmit={signup}>
        <TextField
            onChange={e => setUsername(e.target.value)} value={username} fullWidth label="username" placeholder="Enter your username" />
          <TextField
            onChange={e => setEmail(e.target.value)} value={email} fullWidth label="email" placeholder="Enter your email" />
          <FormControl component="fieldset" style={marginTop}>
          </FormControl>
          <TextField
            onChange={e => setPassword(e.target.value)} value={password} fullWidth label="Password" placeholder="Create Your Password" />          <TextField fullWidth label="Confirm Password" placeholder="Confirm Your Password" />
          {/* <FormControlLabel
            control={
              <Checkbox
                name="checkedA"
                color="#00801c"
              />
            }
            label="I accept terms and conditions"
          /> */}
          <Button onClick={signup} type="submit" style={btnStyle} varient="contained" >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  )

}


export default Signup;