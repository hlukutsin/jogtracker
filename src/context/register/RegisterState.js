import React, {useReducer} from 'react'
import {RegisterContext} from './registerContext'
import {registerReducer} from './registerReducer'
import axios from 'axios'
import { GET_TOKEN} from '../types'

export const RegisterState = ({children}) => {
	
	const initialState = {
    access: false,
		token: '',
  }
    
	const [state, dispatch] = useReducer(registerReducer, initialState)

		const fetchToken = async () => {
			try {

				const res = await axios.post("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin",
				 new  URLSearchParams({uuid: 'hello'}))
				 let token = res.data.response.access_token;

				 localStorage.setItem('token', token)
				 
				 dispatch({
      		type: GET_TOKEN,
					 payload: token,
				})
			}
			catch (e) {
				throw new Error(e.messege)
			}
  }

	return (
    <RegisterContext.Provider value={{fetchToken, access: state.access, token: state.token}}>
      {children}
    </RegisterContext.Provider>
  )

}