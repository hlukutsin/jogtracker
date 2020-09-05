import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'
import {useHistory} from 'react-router-dom'
import api from '../api/index'

export const Item = (props) => {

  const {getId, fetchJogs,} =  useContext(StoreContext)

  const history = useHistory();

  const handleClick = (id, user_id) => {
    getId(id, user_id)
    history.push('/form');
  };

  const deleteId = async (id, userId) => {
    console.log('deleteID',id, userId)
  const res = await api.deleteJog({jog_id: id, user_id: userId})
  let result = res.response;
  console.log(result)
  fetchJogs()
  }

const date = new Date(props.date * 1000)
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
if (month < 10) {
  month = '0' + month
}
if (day < 10) {
  day = '0' + day
}



return (
  <div className='wrapper'>
    <button onClick={() => deleteId(props.id, props.user_id)}>Delete</button>
  <div className='item' 
  onClick={ () => handleClick(props.id, props.user_id)}
  >
    <h1>Item</h1>
    <p>{`${day}.${month}.${year}`}</p>
    <p>Speed: 15</p>
    <p>Distance: {props.distance} km</p>
    <p>Time: {props.time} min</p>
  </div>
  </div>
)
}