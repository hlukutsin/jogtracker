import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom'
import {RegisterContext} from '../context/register/registerContext'
import {Register} from './Register'
import {Jogs} from './Jogs'
import {Info} from './Info'
import {ContactUs} from './ContactUs'
import {Creating} from './Creating'

export const Main = () => {
  
  useContext(RegisterContext)
  
  const token = localStorage.getItem('token')
 
    return  (
      <div className='container'>
          {token
          ?<Switch>
            <Route path={'/'} exact component={Jogs} />
            <Route path={'/info'} exact component={Info} />
            <Route path={'/contact'} exact component={ContactUs} />
            <Route path={'/creating'} exact component={Creating} />
          </Switch> 
          :<Register />
          } 
      </div>
      )
}


