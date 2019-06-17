import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login/index';
import Activity from './pages/activity/index';
import Nav from '../src/pages/Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/activity" component={Activity}/>
          {/* 重定向 */}
          <Redirect to='/'></Redirect>
        </Switch>
      </Router>
    );
  }
}

export default App;
