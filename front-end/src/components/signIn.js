import React from 'react'
import './signUp.css'
export default class SignIn extends React.Component {

    state={
        first_name: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/signin',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                first_name: this.state.first_name,
                password: this.state.password,

            })
        }).then(res=>res.json())

        .then(user => {
            console.log('this is our user', user)
          if(user.error){
            alert('Incorrect first_name or Password. Please try again.')
            this.props.history.push('/sign-in')
          }
          else{
            localStorage.setItem('token',user.auth_token)
            localStorage.setItem('user',user.id)
            this.props.history.push('/home')
          }
          
        })

        
    }


 render(){
        return(

        <div className="login-page">
            <h1 > <strong> Welcome to school locator </strong> </h1>
              
                <div className="form">
                <form onSubmit={this.handleSubmit} className="login-form">
                <input name = "first_name"  type="name" placeholder="first_name" onChange={this.handleChange}/>
                <input name = "password"    type = "name" placeholder = "password" onChange={this.handleChange}/>
                  <button style={{"border-radius": "7px"}}>Sign In</button>
                   
                    <p className="message"> <h3>Not registered?</h3><a href="sign-up">Sign Up</a></p>
                </form>
                </div>
                <h2> <strong> </strong> </h2>
              </div>
        )
    }
}