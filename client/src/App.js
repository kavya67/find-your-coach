import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import _ from 'lodash'


import CustomerRegister from './components/Customer/CustomerRegister'
import CoachRegister from './components/Coach/CoachRegister'
import Home from './components/Home'
import Login from './components/Login'
import Account from './components/Account'
import Logout from './components/Logout'

class App extends React.Component{
    render(){
        return(

            <div className= "container pt-sm-5">

                <BrowserRouter>
                    <div className="navbar navbar-light bg-light">
                    <span className="nav-brand"><h2>{this.props.msg}</h2></span>
                    <ul className="nav justify-content-end">
                        {_.isEmpty(this.props.user)? (
                            
                           <div>
                                <Link to = '/users/register' className="btn btn-outline-dark btn-sm">Register</Link>
                                <span> </span>
                                <Link to = '/users/login'  className="btn btn-outline-dark btn-sm">Login</Link>
                           </div>

                        ) : (
                            <div>
                                <Link to = '/users/account'className="btn btn-outline-dark btn-sm"> Account </Link>
                                <span> </span>
                                <Link to = '/users/logout' className="btn btn-outline-dark btn-sm"> Logout </Link>
                            </div>
                        )}
                    </ul>

                    </div>
                   
                    <Switch>
                        
                        <Route path = '/users/register' component = {CustomerRegister} exact/>
                        <Route path = '/users/login' component = {Login} exact/>
                        <Route path = '/users/Account' component = {Account} exact/>
                        <Route path = '/users/logout' component = {Logout} exact/>
                        <Route path  = '/' component={Home} exact/>
                        <Route path = "/coach/register" component={CoachRegister} exact/>
                        <Route path = "/customer/register" component={CustomerRegister} exact/>
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