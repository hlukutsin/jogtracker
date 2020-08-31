import React, {useContext} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {RegisterContext} from '../context/register/registerContext'
import {Register} from './Register'
import {Jogs} from './Jogs'

export const Main = () => {
  
  const {access, token} = useContext(RegisterContext)
  
  console.log(access, token)

 if (localStorage.getItem('token')) {
    return  (
      <div className='container'>
          <Jogs />
      </div>
      )
  }
     return ( 
      <div className='container'>
          <Register />  
      </div>
  )
}


