import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {

    const token = localStorage.getItem('token')

    const {changeFilter} = useContext(StoreContext)

    let className = token?'acsNavbar navbar':'regNavbar navbar';

    return (
        <div className={className}>
            <div className='logo'>Logo</div>
            {token
            ? <div className='links'>
                    <NavLink className='navLink' to='/' exact>JOGS</NavLink>
                    <NavLink className='navLink' to='/info'>INFO</NavLink>
                    <NavLink className='navLink' to='/contact'>CONTACT US</NavLink>
                    <NavLink className='navLink' to='/' onClick={()=>changeFilter()}>FILTER</NavLink>
                </div>
            : null
            }
        </div>
    )
}