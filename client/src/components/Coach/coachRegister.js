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
            <div>
                <h2>Coach Register Form</h2>
                <UserForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }


}

export default CoachRegister