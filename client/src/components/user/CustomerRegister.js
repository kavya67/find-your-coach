import React from 'react'
import axios from '../../config/config'
import UserForm from '../user/Form'

class CustomerRegister extends React.Component{
    constructor(props){
        super(props)
    
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit(formData){
        
        axios.post('/users/register', formData)
            .then(response=>{
                if(response.data.errors){
                    alert(response.data.message)
                    }else{
                        this.props.history.push('/users/login')
                    }
            })

    }
    render(){
        return(
            <div>
                <h2>Customer Registration Form</h2>
                <UserForm handleSubmit={this.handleSubmit}/>

                
            </div>
        )
    }
}

export default CustomerRegister