import {Grid,Paper,Avatar,TextField,Button,Typography,Link,} from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import "../../components/Header.css";
 
const Login = ({handleChange,}) => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const paperStyle={padding :20,height:"62vh",width:300, margin:"0 auto", borderRadius:"20px"}
  const avatarStyle={backgroundColor:"black"}
  const btnStyle={backgroundColor:"black"}
  async function login(e) {
    e.preventDefault();
    try {
     const loginData = {
       name,
       password,
     };
     await axios.post("http://localhost:3000/login", loginData).then((res) => console.log(res))
    }catch(err){
      console.error(err);
    }
  }

  return (
    <Grid>
      <Paper className="image" elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <Typography variant="caption" gutterbottom>
            Sign in to add to and view your wishlist
        </Typography>
        <form onSubmit={login}>
          <TextField
          label="Username" name="username" placeholder="Enter username" fullWidth required onChange={(e) => setname(e.target.value)} value={name}/>
          <TextField label="Password" name="password" placeholder="Enter Password" type="password" fullWidth required onChange={(e) => setPassword(e.target.value)} value={password}/>
          <Button
            href="/wishlist"
            type="submit"
            style={btnStyle}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Login
          </Button>
        </form>
        <Typography>
          {" "}
          Do you have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            <br /> Sign up!
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
