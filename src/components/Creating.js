import React from 'react'
import {NavLink} from 'react-router-dom'

export const Creating = () => {

    // const remove = () => {
    //     localStorage.removeItem('token')
    // }

return (
    <div className='createDiv'>
        Create jogs
        <NavLink className='navLink' to='/form'>Add jog</NavLink>
    </div>
)
}