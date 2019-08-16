import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import NavHome from './components/nav.js'
import Favorites from './components/favorites'
import MapContainer from './components/mapContainer'
import ApplicationForm from './components/applicationForm'
import ApplicationSubmition from './components/applicationSubmition'
import ModalForm from './components/modalForm'

function App() {
  return (
    <div className="App">
      <div>
          <BrowserRouter >
            
            <Route exact path = '/sign-in' component={SignIn} />
            <Route exact path = '/sign-up' component={SignUp} />
            <Route exact path = '/home' component={NavHome}/>
            <Route exact path = '/map' component = {MapContainer}/>
            <Route exact path = '/favorites' component = {Favorites}/>
            <Route exact path = '/application' component = {ApplicationForm}/>
            <Route exact path = '/applicationSubmit' component ={ApplicationSubmition}/>

             {/* <Route exact path = '/modal' component = {ModalForm}/> */}



      
          </BrowserRouter>
         
        </div>
    </div>
  );
}

export default App;
