import React from 'react'
import {FormJog} from './FormJog'

export const Jogs = () => {

    const remove = () => {
        localStorage.removeItem('token')
    }

return (
    <div className='jogs'>
        <FormJog />
        <button onClick={() => remove()} className='letMeIn'>Remove token</button>
    </div>
)
}