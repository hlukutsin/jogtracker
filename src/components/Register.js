import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'

export const Register = () => {
    const {fetchToken} = useContext(StoreContext)

    const fetch = () => {
        fetchToken()
    }
    return (

        <div className='register'>
            <div className='bearBox'>
                <button onClick={() => fetch()} className='letMeIn'>Let me in</button>
            </div>
        </div>
    )
}