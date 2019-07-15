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
        <form className="form-group" onSubmit = {this.handleSubmit}>
            Name
            <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
            /><br/>
            Email 
            <input
                type='text'
                className="form-control"
                placeholder="E-mail"
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
            /><br/>
            Password 
            <input
                type='password'
                className="form-control"
                placeholder="Password"
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
            /><br/>
            Mobile 
            <input
                type='text'
                className="form-control"
                placeholder="Mobile"
                name='mobile'
                value={this.state.mobile}
                onChange={this.handleChange}
            /><br/>
            <button type="submit" className="btn btn-dark">Register</button>
        </form>
      )
  }

}

export default UserForm