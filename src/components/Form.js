import React, {useState, useContext} from 'react'
import api from '../api/index'
import {NavLink} from 'react-router-dom'
import {StoreContext} from '../context/store/storeContext'

export const Form = () => {

const {fetchJogs,  item, getId} = useContext(StoreContext)

const initialState = {
    distance: '',
    time: '',
    date: ''
}

const [state, setState] = useState(initialState)

const getData = (evt) => {
    evt.preventDefault()
    const target = evt.target
    const name = target.name
    const value = target.value

    setState(
       {...state, [name]: value}
    )
}

const createJog = async  (evt) => {
    evt.preventDefault()
    console.log(item)
    const distance = state.distance
    const time = state.time
    const date = state.date
    const token = localStorage.getItem('token')
    api.token = token

    if (distance && time && date) {
        
    if (item===null) {
    const res = await api.addJog({date, time, distance})
    let result = res.response;
    fetchJogs()
    
    } else {
        const id = item.id
        const user = item.userID
        const res = await api.putJog({date: date, time: time, distance: distance, jog_id: id, user_id: user})
        let result = res.response;
        fetchJogs()
        getId()
    }
    setState(initialState)

    }
}

return (
    <div className='formJog'>
        <NavLink className='navLink' to='/'>Close</NavLink>
        <form className='form' onSubmit={createJog} >
            <div>
                <label>
                 Distance:
                <input className='input' name='distance'  type="number" value={state.distance}  onChange={(evt) => getData(evt)} />
                </label>
            </div>
            <div>
                <label>
                 Time:
                <input className='input' name='time' type="number" value={state.time} onChange={(evt) => getData(evt)} />
                </label>
            </div>
            <div>
                <label>
                Date:
                <input className='input' name='date' type="Date" min="1970-01-01" max="2021-12-31"  value={state.date} onChange={(evt) => getData(evt)} />
                </label>
            </div>
            <input type="submit" value="Save" />
      </form>
    </div>
)
}