import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {

    const token = localStorage.getItem('token')

    const {changeFilter, getFilterParams} = useContext(StoreContext)

    const handle = () => {
        changeFilter()
        getFilterParams()
    }

    let className = token?'acsNavbar navbar':'regNavbar navbar';

    return (
        <div className={className}>
            <div className='logo'>Logo</div>
            {token
            ? <div className='links'>
                    <NavLink className='navLink' to='/'  exact>JOGS</NavLink>
                    <NavLink className='navLink' to='/info' onClick={()=>getFilterParams()}>INFO</NavLink>
                    <NavLink className='navLink' to='/contact' onClick={()=>getFilterParams()}>CONTACT US</NavLink>
                    <NavLink className='navLink' to='/' onClick={()=>handle()}>FILTER</NavLink>
                </div>
            : null
            }
        </div>
    )
}