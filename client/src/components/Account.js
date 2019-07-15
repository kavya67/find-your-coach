import React from 'react'
import axios from '../config/config'

import {setUser} from '../actions/usersAction'
import {connect} from 'react-redux'

import CustomerAccount from "./customer/CustomerAccount";
import CoachAccount from "./coach/CoachAccount";

class Account extends React.Component{
    componentDidMount(){
        axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                console.log('account', response.data)
                const user = response.data
                this.props.dispatch(setUser(user))
            })
            .catch(err=>console.log(err))
    }
    render(){
        if(this.props.user.role === "coach"){
            return(
                <CoachAccount user={this.props.user}/>
            )
        } else if(this.props.user.role === "customer") {
            return(
                <div>
                    <CustomerAccount user={this.props.user}/>
                </div>
            )
        } else {
            return (
                <></>
            )
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Account)