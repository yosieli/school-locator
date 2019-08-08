import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Home from './components/home.js'

function App() {
  return (
    <div className="App">
      {/* <div>
          <BrowserRouter >
            <NavBar />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
          </BrowserRouter>
        </div> */}
        <Home/>
    </div>
  );
}

export default App;
