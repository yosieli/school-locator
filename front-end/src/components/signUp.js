import React from 'react'
import './signUp.css'
export default class SignUp extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        password: '',
        zip_code: '',
        current_grade: ''

    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password,
                zip_code: this.state.zip_code,
                current_grade: this.state.current_grade

            })
            }).then(user => {
                console.log(user)
                if(this.state.first_name === '' || this.state.password === '' ){
                  alert('Please input values for first_name or password')
                }
                else if(user.statusText === "Internal Server Error"){
                  alert('first_name already taken. Please select another.')
                }
                // else if (this.state.first_name === user.target.value){
                //   alert('username already exists.try other user name')
                // }
                
                else{
      
                  this.props.history.push('/sign-in')
                }
              })

    }


    handleChange = (e) => {
      this.setState({
            [e.target.name]: e.target.value
      })

    }

    render(){
        return(

        <div className="login-page">
            <h3 > <strong> Welcome to school locator </strong> </h3>
              <br></br> <br></br>
            <div autoPlay muted loop id="video-background"  style={{backgroundColor: 'gray'}}>
            </div>
                <div className="form">
                    <form onSubmit={this.handleSubmit} className="login-form" >
                    <input name = "first_name"  type="name" placeholder="first_name" onChange={this.handleChange}/>
                    <input name = "last_name"    type = "name" placeholder = "last_name" onChange={this.handleChange}/>
                    <input name = "password"  type="name" placeholder="password" onChange={this.handleChange}/>
                    <input name = "zip_code"    type = "name" placeholder = "zip_code" onChange={this.handleChange}/>
                    <input name = "current_grade"    type = "name" placeholder = "current_grade" onChange={this.handleChange}/>
                    <button style={{"border-radius": "7px"}}>Sign Up</button>
                    
                        <p className="message"><h3>Already registered?</h3> <a href="sign-in"><h3>Sign In</h3></a></p>
                    </form>
                </div>
                <h2> <strong> </strong> </h2>
              </div>
        )
    }
}