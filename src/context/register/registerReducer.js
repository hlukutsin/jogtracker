import {GET_TOKEN} from '../types'

const initialState = {
    access: false,
    token: '',
    click: false,
  }
  
  export const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TOKEN:
            return {...state, token: action.payload, access: true}
        default:
            return state  
    }
  }