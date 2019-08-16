import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import  ApplicationForm from './applicationForm'

class FavoriteCards extends React.Component {
    
    state = {
        showForm: false
    }

    handleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }


    render () {
        return (
          <div style = {{bgcolor: 'white'}}> 
        <Col sm ={10}>
           <Card style={{ opacity: '.8', width: '18rem','border-radius': '7px', marginLeft: '16%', marginTop: '10%', width: '40vh',height: '35vh',fontStyle: 'bold'}}>
                <Card.Body>
                    <Card.Title><h2>School Name:{this.props.favorite.school.school_name}</h2></Card.Title>
                    <Card.Text><h2>Description: {this.props.favorite.school.description}</h2></Card.Text>
                    <Card.Text><h2>Rating: {this.props.favorite.school.rating}</h2></Card.Text>

                    <Button  variant="outline-primary" style = {{marginBottom: '5px' }} onClick = {() => this.handleForm()} size = 'lg'>Applay</Button>
                    <br></br>
                    <Button variant = "outline-danger" onClick = {() =>this.props.remove(this.props.favorite)} size = 'lg'>Remove </Button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="/home"> <h4 style = {{color: 'blue'}}> back</h4></a>
                </Card.Body>
            </Card>
        </Col>
            {this.state.showForm ? <ApplicationForm/>: null}
          </div>
        )
    }

}
export default FavoriteCards