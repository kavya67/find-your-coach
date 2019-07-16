import React from 'react'
import axios from '../../config/config'
import UserForm from '../Form'

class CoachRegister extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData){
        formData.role = "coach"
        console.log(formData)
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
            <div className="container pt-sm-5 col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">Register as Coach</h5>
                        <UserForm handleSubmit={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoachRegister
