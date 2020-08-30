import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom';
import Homepage from './Homepage'
import Details from './Details'

function App() {
  return(
    <div>
      <header>STAR WARS STARSHIPS</header>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/homepage' render={({location}) => 
          <Details location={location}/>
          }/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;