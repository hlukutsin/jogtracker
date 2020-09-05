import React, {useContext, useState, useEffect} from 'react'
import {StoreContext} from '../context/store/storeContext'

export const Filter = () => {

    const initialState = {
        dateFrom: '',
        dateTo: ''
    }

    const [state, setState] = useState(initialState)

    const {getFilterParams} = useContext(StoreContext)


    const res = state.dateFrom

    getFilterParams(res)

    // let result = state.dateFrom

    // useEffect(() => {
    //    { getFilterParams(result)}
    //   }, [result])

    let params = {}

    const getData = (evt) => {
        evt.preventDefault();
        console.log(evt)
        const target = evt.target;
        const name = target.name
        const value = target.value
        
        setState(
           {...state, [name]: value}
        )
        
    }

        console.log('state', state)
    return (

        <div className='filter'>
            <div className='filterInputs'>
            <div>
                <label>
                Date from 
                <input className='input' name='dateFrom'type="Date"   onChange={(evt) => getData(evt) } min="1970-01-01" max="2021-12-31" />
                </label>
            </div>
            <div>
                <label>
                Date to
                <input className='input' name='dateTo' type="Date" min="1970-01-01" max="2021-12-31"  onChange={(evt) => getData(evt)} />
                </label>
            </div>
            </div>
        </div>
    )
}