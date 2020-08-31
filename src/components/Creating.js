import React from 'react'
import {Link} from 'react-router-dom'

export const Creating = () => {

    // const remove = () => {
    //     localStorage.removeItem('token')
    // }

return (
    <div className='createDiv'>
        <Link to="/">
          <button className='createBtn' renderAs="button">
            Create your jog first
          </button>
        </Link>
    </div>
)
}