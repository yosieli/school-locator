import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import NavHome from './components/nav.js'
import Favorites from './components/favorites'
import MapContainer from './components/mapContainer'
import Header from './components/header'
import Home from './components/home'


function App() {
  return (
    <div className="App">
      <div>
          <BrowserRouter >
            {/* <NavHome/> */}
            <Route exact path = '/' component={NavHome}/>   
            {/* <Home/> */}
            {/* <SignIn/> */}
            <Route exact path = '/sign-in' component={SignIn} />
            <Route exact path = '/sign-up' component={SignUp} />
            <Route exact path = '/map' component = {MapContainer}/>
            <Route exact path = '/favorites' component = {Favorites}/>
            {/* <Route  exact path = '/home' component ={Home}/> */}
          </BrowserRouter>
         
        </div>
    </div>
  );
}

export default App;
