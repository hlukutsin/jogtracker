import React, {useContext} from 'react'
import {RegisterContext} from '../context/register/registerContext'

export const Register = () => {
    const {fetchToken} = useContext(RegisterContext)
    return (
        <div className='register'>
            <div className='bearBox'>
                <button onClick={() => fetchToken()} className='letMeIn'>Let me in</button>
            </div>
        </div>
    )
}