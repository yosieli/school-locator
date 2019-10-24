import React from 'react'
import './signUp.css'
import {withRouter} from 'react-router'
class SignIn extends React.Component {

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
          if(user.error){
            alert('Incorrect first_name or Password. Please try again.')
            this.props.history.push('/sign-in')
          }
          else{
            localStorage.setItem('token',user.auth_token)
            localStorage.setItem('user',user.id)
            this.props.history.push('/')
          }
          
        })

        
    }


    render(){
        return(

            <div className="login-page">
                  <br></br>
                  <br></br>
                <div autoPlay muted loop id="video-background"  style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMycqSZrVmNdNgg71L7AblCQWp1wXvZB1KJ5zoDFlCrznYNyBkeg')`,backgroundSize: 'cover'}}>
                </div>
                    <div className="form">
                    <form onSubmit={this.handleSubmit} className="login-form">
                      <h1 style = {{color: '#000066',fontStyle: 'normal'}}> WelCome To School Finder</h1><br></br>
                      <input name = "first_name"  type="name" placeholder="first_name" onChange={this.handleChange}/>
                      <input name = "password"    type = "password" placeholder = "password" onChange={this.handleChange}/>
                        <button style={{"border-radius": "7px"}}>Sign In</button>
                        
                        <p className="message" ><h3 >Not registered?<a href="sign-up" style = {{color: '#000066'}}><br></br>Sign Up</a></h3></p>
                    </form>
                    </div>
                    <h2> <strong> </strong> </h2>
              </div>
        )
    }
}  
export default withRouter(SignIn)