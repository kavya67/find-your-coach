import React from 'react'
import ReactDOM from 'react-dom'
import axios from './config/config'


import {Provider} from 'react-redux'
import {setUser} from '../src/actions/usersAction'
import configureStore from './store/configureStore'

import App from './App'

const store = configureStore()
store.subscribe(()=>{
    console.log('redux store data',store.getState())
})

if(localStorage.getItem('userAuthToken')){
    axios.get('/users/account',{
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
        .then(response=>{
            store.dispatch(setUser(response.data))
        })
}



const jsx = <Provider store = {store}>
                <App/>
            </Provider>

ReactDOM.render(jsx, document.getElementById('root'))

