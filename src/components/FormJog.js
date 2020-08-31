import React, {useState} from 'react'
import axios from 'axios' 


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

const submitData =  (evt) => {
    evt.preventDefault();
    const distance = state.distance
    const time = state.time
    const date = state.date
    const token = localStorage.getItem('token')

    if (distance && time && date) {
        
        ( async function(){
			try {
                const addtoken = `Bearer ${token}`
                const addParams = new  URLSearchParams({date, time, distance,})
                const res = await axios.post("https://jogtracker.herokuapp.com/api/v1/data/jog",{params:  addParams},{
                    headers: addtoken
                })
                let  result = res.data.response;
                console.log(result)
                
			}
			catch (e) {
                console.log(e)
                throw new Error(e.messEge)
			}
        })()
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
// (async function() {
//     let tokenResponse = await fetch("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin", {
//       method: "POST",
//       body: new  URLSearchParams({uuid: 'hello'})
//     });
//       const data = await tokenResponse.json();
//       const token = data.response.access_token;
//       console.log(data);
//       console.log(data.response.access_token);
  
//       let params = new URLSearchParams({date: 22.08, time: 11.55, distance: 1000});
//       let newParams = new URLSearchParams({date: 15.08, time: 20, distance: 1000000, jog_id: 2192, user_id: 3, });
  
//      let  request = async (url, method, token, params) => {
//       let response = await fetch(url, {
//           method: method,
//           headers: {
//               Authorization: `Bearer ${token}`
//           },
//           body: params,
//         });
      
//         let result = await response.json();
//         console.log(result);
//    }
//    request("https://jogtracker.herokuapp.com/api/v1/data/jog", "POST", token, params);
//    request("https://jogtracker.herokuapp.com/api/v1/data/jog", "PUT", token, newParams);
  
  
//   })();
// onSubmit={''}