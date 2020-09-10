import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'
import {NavLink} from 'react-router-dom'
import logo from '../assets/images/desktop/logo.png'
import logoMobile from '../assets/images/mobile/logo.png'
import menuMobile from '../assets/images/mobile/menu.png'
import filterOff from '../assets/images/desktop/filterOff.png'
import filterOn from '../assets/images/desktop/filterOn.png'  

export const Navbar = () => {

    const token = localStorage.getItem('token')

    const {changeFilter, getFilterParams, filter} = useContext(StoreContext)

    const handle = () => {
        changeFilter()
        getFilterParams()
    }

    let className = token?'acsNavbar navbar':'regNavbar navbar';

    let filterClass
    let filterSrc
    if (filter) {
        filterSrc = filterOn
        filterClass = 'filterBtn filterBtnOff'
    } else {
        filterSrc = filterOff
        filterClass = 'filterBtn filterBtnOn'
    }

    return (
        <div className={className}>
            <div className='logo'>
                <img className='logoDesk' src={logo}  alt="Logo"></img>
                <img className='logoMob' src={logoMobile}  alt="Logo"></img>
            </div>
            {token
            ? <div className='links'>
                    <NavLink className='navLink jogsNav' to='/'  exact>JOGS</NavLink>
                    <NavLink className='navLink infoNav' to='/info' onClick={()=>getFilterParams()}>INFO</NavLink>
                    <NavLink className='navLink contactNav' to='/contact' onClick={()=>getFilterParams()}>CONTACT US</NavLink>
                    <NavLink to='/' onClick={()=>handle()}>
                        <img src={filterSrc} className={filterClass} alt="Filter"/>
                    </NavLink>
                    <NavLink className='navMenuMobile' to='/menu'>
                    <img src={menuMobile} className='menuMobile' alt="Filter"/>
                    </NavLink>
                </div>
            : <img src={menuMobile} className='menuMobile' alt="Filter"/>
            }
        </div>
    )
}