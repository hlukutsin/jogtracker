import {GET_TOKEN} from '../types'
import {GET_JOGS} from '../types'
import {CHANGE_ITEM} from '../types'

const initialState = {
    token: '',
    jogs: [],
    item: null
  }
  
  export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TOKEN:
            return {...state, token: action.payload, access: true}
        case GET_JOGS:
            return {...state, jogs: action.payload}
        case CHANGE_ITEM:
            return {...state, item: action.payload}
            //flag: false creating jog / true changing jog
        default:
            return state  
    }
  }