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

}
