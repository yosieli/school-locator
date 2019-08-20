import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import  ApplicationForm from './applicationForm'
import ApplicationSubmition from './applicationSubmition';

class FavoriteCards extends React.Component {
    
    state = {
        showForm: false,
        ShowSubmitionForm: false,
        has_applied:false
    }

    handleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    handleView = () => {
        this.setState({
            ShowSubmitionForm: !this.state.ShowSubmitionForm
        })

    }

    sendToPage = () => {
        this.props.sendToPage()
    }

    render () {
        return (
        <div>
        <Col sm ={5}>
           <Card style={{ opacity: '.8', width: '18rem','border-radius': '7px', marginLeft: '16%', marginTop: '10%', width: '43vh',height: '50vh',fontStyle: 'bold'}}>
                <Card.Body>
                    <Card.Title><h2>School Name: {this.props.favorite.school.school_name}</h2></Card.Title>
                    <Card.Text><h2>Description: {this.props.favorite.school.description}</h2></Card.Text>
                    <Card.Text><h2>Rating: {this.props.favorite.school.rating}</h2></Card.Text>
                    <Card.Text><h2>Grade: {this.props.favorite.school.grade}</h2></Card.Text>

                    <Button  variant="outline-primary" style = {{marginTop: '5px' }} onClick = {()=>this.props.applay()} size = 'lg' >Applay</Button>
                    <br></br><br></br>
                    {/* <Button variant = "outline-primary"  size ='lg' onClick = {() => this.handleView()}>View Application</Button>
                    <br></br><br></br> */}
                    <Button variant = "outline-danger" onClick = {() =>this.props.remove(this.props.favorite)} size = 'lg'>Remove </Button>
                    <br></br><br></br>
                    <a href = './home'><h3>Back</h3></a>
                </Card.Body>
            </Card>
        </Col>
              {this.state.ShowSubmitionForm ? <ApplicationSubmition/>: null}  
        </div>
        )
    }

}
export default FavoriteCards