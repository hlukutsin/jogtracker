import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'
import {Item} from './Item'
import {NavLink} from 'react-router-dom'
import {Creating } from './Creating'

export const Jogs = () => {

    const {jogs} =  useContext(StoreContext)

    const remove = () => {
        localStorage.removeItem('token')
    }


    let jogsArr = jogs;
    console.log(jogsArr.length)

return (
    <div className='jogs'>
        <button onClick={remove}>Remove</button>
        {jogsArr.length !== 0
        ?jogsArr.map((item, ident) => (
            <Item
            key = {ident}
            id = {item.id}
            user_id = {item.user_id}
            distance = {item.distance}
            time = {item.time}
            date = {item.date}
            speed = {item.speed}
            />
        ))
        : <Creating />
        }
        {   jogsArr.length !== 0
            ?<NavLink className='navLink' to='/form'>Add jog</NavLink>
            : null
        }
    </div>
)
}


