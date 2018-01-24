import React from 'react'

class AuthForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password:'',
    }

    let memberFunctions = Object.getOwnPropertyNames(AuthForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event){
    let {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState({
      username: '',
      email: '',
      password:'',
    })
  }

  render(){
    let {type} = this.props
    let signupJSX = 
     <input 
       name = 'email'
       placeholder = 'email'
       type='email'
       value={this.state.email}
       onChange={this.handleChange}
     />
    let signupRenderJSX = (type !== 'login') ? signupJSX : undefined
    
    return(
      <form className='auth-form' onSubmit={this.handleSubmit} >
      
        <input
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />

        {signupRenderedJSX}

        <input
          name='password'
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type='submit'> {type} </button>
      </form>
    )
  }
}

export default AuthForm
