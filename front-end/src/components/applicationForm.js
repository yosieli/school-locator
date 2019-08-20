import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './signUp.css'
import ApplicationSubmition from './applicationSubmition'
import { Link } from 'react-router-dom'

 class  ApplicationForm extends React.Component {

      state = {
        first_name: '',
        last_name: '',
        password: '',
        zip_code: '',
        current_grade: '',
        has_applied: false,
        showForm: true

    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/applicationForm',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password,
                zip_code: this.state.zip_code,
                current_grade: this.state.current_grade,
                has_applied:this.state.has_applied

            })

            }).then(user => {
            
                if(this.state.first_name === '' || this.state.password === '' || this.state.last_name === '' || this.state.zip_code === ''|| this.state.current_grade === ''){
                  alert('Please input values for all')
                }
                else if(user.statusText === "Internal Server Error"){
                  alert('first_name already taken. Please select another.')
                }
                
               
                
                else {
                     this.newPage()
                   
                }
            })
              

    }


    handleChange = (e) => {
      this.setState({
            [e.target.name]: e.target.value
      })

    }
    sendToPage = () => {
        this.props.sendToPage()
    }

    newPage = () =>{
        this.props.history.push('./applicationSubmit')
    }

    // handleCancel = () =>{
    //     this.setState({
    //         showForm: false
    //     })
      
    // }

      render (){
          return(
            <div className="login-page">
              {/* <h3 > <strong> Please Fill The Form To Applay </strong> </h3> */}
              <br></br> <br></br>
              <div autoPlay muted loop id="video-background" style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMycqSZrVmNdNgg71L7AblCQWp1wXvZB1KJ5zoDFlCrznYNyBkeg')`,backgroundSize: 'cover'}}>
                  </div>
                    <div className="form" onSubmit = {this.handleSubmit}>
                        {this.state.has_applied?
                        <form  className="login-form"  >
                            <input name = "first_name"  type="name" placeholder="first_name" onChange={this.handleChange}/>
                            <input name = "last_name"    type = "name" placeholder = "last_name" onChange={this.handleChange}/>
                            <input name = "password"  type="name" placeholder="password" onChange={this.handleChange}/>
                            <input name = "zip_code"    type = "name" placeholder = "zip_code" onChange={this.handleChange}/>
                            <input name = "current_grade"    type = "name" placeholder = "current_grade" onChange={this.handleChange}/>
                            <button style={{"border-radius": "10"}} >Submit Form </button>
                            <br></br><br></br>
                           
                        </form>: <ApplicationSubmition/>}
                    </div>
                   {/* <a href = './favorites'><h2> <strong> BACK</strong> </h2></a>  */}
              </div>

           )
        }
    

    }

export default ApplicationForm