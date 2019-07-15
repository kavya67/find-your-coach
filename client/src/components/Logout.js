import React from 'react'
import axios from '../config/config'

import {resetUser} from '../actions/usersAction'
import { connect } from 'react-redux';

class Logout extends React.Component{
    componentDidMount(){
        axios.delete('/users/logout',{
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                console.log(response.data)
                localStorage.removeItem('userAuthToken')
                this.props.dispatch(resetUser())
                this.props.history.push('/users/login')
            })
    }
    render(){
        return(
            <div>
                <h3>{this.props.user.username} is logging out....</h3>
            </div>
        )
    }
}

const mapstateToProps = (state)=>{
    return {
        user: state.user
}
}

export default connect(mapstateToProps)(Logout)
