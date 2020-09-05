import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'
import {Item} from './Item'
import {NavLink} from 'react-router-dom'
import {Creating } from './Creating'
import {Filter} from './Filter'

export const Jogs = () => {

    const {jogs, filter} =  useContext(StoreContext)

    // const remove = () => {
    //     localStorage.removeItem('token')
    // }

    let jogsArr = jogs;

    let showFilter
    if (filter===true) {
        showFilter = <Filter />
    }

return (
    <div className='jogs'>
        {/* <button onClick={remove}>Remove</button> */}
        {showFilter}
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


