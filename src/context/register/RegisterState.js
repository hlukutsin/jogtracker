import React, {useReducer} from 'react'
import {RegisterContext} from './registerContext'
import {registerReducer} from './registerReducer'
import { GET_TOKEN} from '../types'
import api from "../../api/index"
console.log("api", api)

export const RegisterState = ({children}) => {

	const initialState = {
    access: false,
		token: '',
  }

	const [state, dispatch] = useReducer(registerReducer, initialState)

		const fetchToken = async () => {
			try {

				const res = await api.getToken({uuid: 'hello'})
				 let token = res.response.access_token;

				 localStorage.setItem('token', token)

				 dispatch({
      		type: 	GET_TOKEN,
					payload: token,
				})
			}
			catch (e) {
        console.log("fetchToken -> e", e)
				throw new Error(e.message)
			}
  }

	return (
    <RegisterContext.Provider value={{fetchToken, access: state.access, token: state.token}}>
      {children}
    </RegisterContext.Provider>
  )

}
