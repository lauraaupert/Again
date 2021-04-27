
import React, { useEffect, useState } from "react";
import NoMatch from "./pages/noMatch";
import Landing from "./pages/landing"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";import LoginPage from "./pages/loginPage";
import passport from "./utils/passport";
import WishlistPage from "./pages/wishlist"
import authenticatedUserContext from "./utils/authenticatedUserContext";


// axios.defaults.withCredentials = true;
function App() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState({})

  useEffect(() => {
    console.log("Helloo??")
    passport.isAuthenticated().then(res => {
      console.log(res.data)
      if (res.data.success) {
        setIsAuthenticatedUser(true)
        setAuthenticatedUser(res.data)
      }
      else {
        setIsAuthenticatedUser(false)
        setAuthenticatedUser({})
      }

      console.log(authenticatedUser)
    })
  }, [])
  return (
    
    <Router>
<authenticatedUserContext.Provider value={authenticatedUser}>
      {/* <VideoBg /> */}
        <Switch>
        {isAuthenticatedUser ?


(<>
  <Route exact path={["/", "/login"]}>
    <Redirect to="/Wishlist" />
  </Route>

  <Route exact path={["/Wishlist"]}>
    <WishlistPage />
  </Route>
</>
) :

(<>
   <Route exact path="/">
    <Landing />
  </Route>
  <Route exact path="/login">
      <LoginPage setIsAuthenticatedUser={setIsAuthenticatedUser} />
  </Route>
</>)
}
<Route>
<NoMatch />
</Route>

</Switch>
</authenticatedUserContext.Provider>

    </Router>
  );
}

export default App;