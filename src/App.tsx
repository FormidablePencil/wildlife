import React from 'react';
import './App.css';
import MainPage from './components/main/MainPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LinkedPage from './components/linked/index';


function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/linkedPage' component={LinkedPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
