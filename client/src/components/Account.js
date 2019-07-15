import React from 'react'
import axios from '../../config/config'

import {setUser} from '../../actions/usersAction'
import {connect} from 'react-redux'

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
        return(
            <div>
                <h3>Welcome {this.props.user.username} </h3>
                <h4>role - {this.props.user.role}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Account)