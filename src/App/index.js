import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import GistPage from '../containers/GistDetailPage';
import GistCreatePage from '../containers/GistCreatePage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/add" component={GistCreatePage} />
            <Route exact path="/login/:action?" component={LoginPage} />
            <Route exact path="/:username?" component={HomePage} />
            <Route exact path="/:username/:gistId" component={GistPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
