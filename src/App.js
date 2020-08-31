import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {RegisterState} from './context/register/RegisterState'
import {Main} from './components/Main'


function App() {

  return (
    <RegisterState>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
   </RegisterState>
  );
}

export default App;
