import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import React from "react";

import SignIn from "../screens/signIn"
import SignUp from "../screens/signUp"
import Dashboard from "../screens/dashboar"

function Routing(props) {
  return (
    <div>
        <Router>

      <Routes>
        <Route path="/" element ={   <SignIn />}/>
         <Route path="/signUp" element ={<SignUp />}/> 
        <Route path="/dashboard" element ={<Dashboard />}/>
      </Routes>
        </Router>
    </div>
  );
}

export default Routing;
