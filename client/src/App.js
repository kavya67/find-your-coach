import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import _ from 'lodash'

import CustomerRegister from './components/user/CustomerRegister'
import Login from './components/Login'
import Account from './components/Account'
import Logout from './components/Logout'

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <h2>{this.props.msg}</h2> 
                    <ul>
                        {_.isEmpty(this.props.user)? (
                            
                           <div>
                                <Link to = '/users/register'>Register</Link>
                                <Link to = '/users/login'>Login</Link>
                           </div>

                        ) : (
                            <div>
                                <Link to = '/users/account'> Account </Link>
                                <Link to = '/users/logout'> Logout </Link>
                            </div>
                        )}
                    </ul>

                    <Switch>
                        <Route path = '/users/register' component = {CustomerRegister} exact/>
                        <Route path = '/users/login' component = {Login} exact/>
                        <Route path = '/users/Account' component = {Account} exact/>
                        <Route path = '/users/logout' component = {Logout} exact/>
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.user,
        msg: 'Find Your Coach'
    }
}

export default connect(mapStateToProps)(App)