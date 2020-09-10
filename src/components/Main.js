import React, {useContext, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import {StoreContext} from '../context/store/storeContext'
import {Register} from './Register'
import {Jogs} from './Jogs'
import {Info} from './Info'
import {ContactUs} from './ContactUs'
import {Creating} from './Creating'
import {Form} from './Form'


export const Main = () => {
  
const {fetchJogs} = useContext(StoreContext)
const token = localStorage.getItem('token')

useEffect(() => {
  if (token) fetchJogs()
}, [token])

    return  (
      <div className='mainContainer'>
          {token
          ?<Switch>
            <Route path={'/'} exact component={Jogs} />
            <Route path={'/info'} exact component={Info} />
            <Route path={'/contact'} exact component={ContactUs} />
            <Route path={'/creating'} exact component={Creating} />
            <Route path={'/form'} exact component={Form} />
          </Switch> 
          :<Register />
          } 
      </div>
      )
}


