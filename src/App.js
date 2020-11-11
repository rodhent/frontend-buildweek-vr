import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from 'react-router';
import "./styles/App.css";


import Home from './components/pages/Home'
import About from './components/About'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Developers from './components/pages/Developers/Developers'
import FundraiserForm from './components/FundraiserForm'
import PrivateRoute from './utils/PrivateRoute';



function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Switch>
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/developers' component={Developers} />
        <Route path='/fundraiserform' component={FundraiserForm} />  
      </Switch>
      </div>
      <Footer />
    </Router>
  </>
  );
}

export default App;
