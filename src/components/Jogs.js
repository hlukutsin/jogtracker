import React from 'react'

export const Jogs = () => {

    const remove = () => {
        localStorage.removeItem('token')
    }

return (
    <div className='jogs'>
        <h1>Jogs</h1>
        <button onClick={() => remove()} className='letMeIn'>Remove token</button>
    </div>
)
}