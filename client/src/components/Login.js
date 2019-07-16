import React from 'react'
import axios from '../config/config';

class Loginform extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]: e.target.value
        }))
    }

    handlesubmit(e){
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/login', formData)
            .then(response=>{
                if(response.data.token){
                    const token = response.data.token
                    localStorage.setItem('userAuthToken', token)
                    this.props.history.push('/users/account')
                }else{
                    alert('Invalid email / password')
                }
            })
        
    }
    render(){
        return(
            <div className="container pt-sm-5 col-sm-6">
                <div className="card">
                    <div className="card-body">
                     <h5 className="card-title text-center">LOGIN</h5>
                        <form onSubmit = {this.handlesubmit}>
                            <div className="form-group">
                            <label> Email </label>
                                <input 
                                    type='text'
                                    name='email'
                                    placeholder='E-mail'
                                    className="form-control" 
                                    onChange={this.handleChange}/>
                            </div>
                            
                            <div className="form-group">
                            <label> Password </label>
                                <input 
                                    type='password' 
                                    name='password'
                                    placeholder='Password'
                                    className="form-control"
                                    onChange={this.handleChange}/>
                            </div>
                            
                            <label className="form-group">
                                <input type='submit' className="btn btn-dark" />
                            </label>
                        </form>

                    </div>
                </div>
                
                
            </div>
        )
    }
}
export default Loginform