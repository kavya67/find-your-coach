import React from 'react'

class UserForm extends React.Component{
  constructor(){
      super()
      this.state = {
        username: '',
        email:'',
        password:'',
        mobile:'',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    e.persist()
    this.setState(()=>({
        [e.target.name]: e.target.value
    }))
}

handleSubmit(e){
    e.preventDefault()
    const formData = {
        username : this.state.username,
        email : this.state.email,
        password : this.state.password,
        mobile : this.state.mobile
    }
    this.props.handleSubmit(formData)
    }
  render(){
      return(
          <div>
              <form onSubmit = {this.handleSubmit}>
                    <label>
                        Name -
                        <input type = "text" name="username" value = {this.state.username} onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Email - 
                        <input type = 'text' name='email' value = {this.state.email} onChange = {this.handleChange}/>
                    </label><br/>
                    <label>
                        Password - 
                        <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.handleChange}/>
                    </label><br/>
                    <label>
                        Mobile - 
                        <input type = 'text'  name = 'mobile' value = {this.state.mobile} onChange = {this.handleChange}/>
                    </label><br/>
                    <label>
                        <input type = 'submit' />
                    </label>
 
                </form>
          </div>
      )
  }

}

export default UserForm