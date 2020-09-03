import React, {useState} from 'react'
import api from '../api/index'


export const FormJog = () => {

const initialState = {
    distance: '',
    time: '',
    date: ''

}

const [state, setState] = useState( initialState)

const getData = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const name = target.name
    const value = target.value
    setState(
       {...state, [name]: value}
    )
}

const submitData = async  (evt) => {
    evt.preventDefault();
    const distance = state.distance
    const time = state.time
    const date = state.date
    const token = localStorage.getItem('token')
    api.token = token

    if (distance && time && date) {
    
    
    const res = await api.addJog({date: date, time: time, distance: distance})
    let result = res.response;
    console.log(result)

    const gets = await api.getJogs()
    let get = gets.response;
    console.log(get)


    }
}

return (
    <div className='formJog'>
        <form className='form' onSubmit={(evt) => submitData(evt)} >
            <div>
                <label>
                 Distance:
                <input className='input' name='distance' type="number" value={state.distance}  onChange={(evt) => getData(evt)} />
                </label>
            </div>
            <div>
                <label>
                 Time:
                <input className='input' name='time' type="number" value={state.time} onChange={(evt) => getData(evt)} />
                </label>
            </div>
            <div>
                <label>
                Date:
                <input className='input' name='date' type="number" value={state.date} min="10" onChange={(evt) => getData(evt)} />
                </label>
            </div>
            <input type="submit" value="Save" />
      </form>
    </div>
)
}