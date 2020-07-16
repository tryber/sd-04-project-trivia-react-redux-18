import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/feedback" component={Feedback} />
      </Switch>
    </Router>
  );
}
