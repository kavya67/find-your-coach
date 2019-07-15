import React from 'react'
import axios from '../git config/config';

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
            <div>
                <h2> Login Form </h2>
                <form onSubmit = {this.handlesubmit}>
                    <label>
                        Email 
                        <input type = 'text' name='email' onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password 
                        <input type = 'password' name = 'password' onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type= 'submit' />
                    </label>
                </form>
            </div>
        )
    }
}
export default Loginform