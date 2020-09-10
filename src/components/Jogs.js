import React, {useContext} from 'react'
import {StoreContext} from '../context/store/storeContext'
import {Item} from './Item'
import {NavLink} from 'react-router-dom'
import {Creating } from './Creating'
import {Filter} from './Filter'

export const Jogs = () => {

    const {jogs, filter, filterParams} =  useContext(StoreContext)

    // const remove = () => {
    //     localStorage.removeItem('token')
    // }

    let jogsArr = jogs;

	let params = filterParams
	let dateFrom
	let dateTo

	if (params) {
		
		if (params.dateFrom) {
			dateFrom = params.dateFrom
			dateFrom = new Date(dateFrom)
			dateFrom.getTime()
			dateFrom = dateFrom/1000
			console.log('to',dateFrom)
		}
		if (params.dateTo) {
			dateTo = params.dateTo
			dateTo = new Date(dateTo)
			dateTo.getTime()
			dateTo = +dateTo/1000
			console.log('to',dateTo)
		}
	}
    



    let showFilter
    if (filter===true) {
        showFilter = <Filter />
		}
		

return (
    <div className='jogs'>
        {/* <button onClick={remove}>Remove</button> */}
        {showFilter}
        {jogsArr.length !== 0
        ?jogsArr.map((item, ident) => {
						
					if (dateFrom <= item.date && item.date <= dateTo) {
						console.log('from',dateFrom)
						console.log('item',item.date)
						console.log('to',dateTo)
					
						return (
							<Item
							key = {ident}
							id = {item.id}
							user_id = {item.user_id}
							distance = {item.distance}
							time = {item.time}
							date = {item.date}
							speed = {item.speed}
							/>
						)	
					}
					if (!dateFrom || !dateTo) {
					if (dateFrom <= item.date) {
					
						return (
							<Item
							key = {ident}
							id = {item.id}
							user_id = {item.user_id}
							distance = {item.distance}
							time = {item.time}
							date = {item.date}
							speed = {item.speed}
							/>
						)	
					} 
					if (item.date <= dateTo) {
					
						return (
							<Item
							key = {ident}
							id = {item.id}
							user_id = {item.user_id}
							distance = {item.distance}
							time = {item.time}
							date = {item.date}
							speed = {item.speed}
							/>
						)	
					}
				}

				 if (!dateFrom && !dateTo){	return (
            <Item
            key = {ident}
            id = {item.id}
            user_id = {item.user_id}
            distance = {item.distance}
            time = {item.time}
            date = {item.date}
            speed = {item.speed}
            />
        		)
					}
					} 
                
        )
        : <Creating />
        }
        {   jogsArr.length !== 0
            ?<NavLink className='navLink' to='/form'>Add jog</NavLink>
            : null
        }
    </div>
)
}


