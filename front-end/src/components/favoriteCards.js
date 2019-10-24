import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


function  FavoriteCards (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    console.log(props.favorite)
    return (
        <div>
            <Col sm ={5}>
            <Card style={{ opacity: '.9','border-radius': '7px', marginLeft: '16%', marginTop: '10%',height: '40vh',width: '40vh',fontStyle: 'bold',borderColor: 'grey',boxShadow: 'inset 0 0 10px #000000',boxSizing: 'content box',borderStyle: 'ridge'}}>
                    <Card.Body>
                        <Card.Title><h4 style ={{color: '#000066'}}>School Name: {props.favorite.school.school_name}</h4></Card.Title>
                        <Card.Text><h4 >Description: {props.favorite.school.description}</h4></Card.Text>
                        <Card.Text><h4 >Rating: {props.favorite.school.rating}</h4></Card.Text>
                        <Card.Text><h4 >Grade: {props.favorite.school.grade}</h4></Card.Text>
                        <Button  variant="outline-success" style = {{marginTop: '5px' }} onClick = {()=>props.applay(props.favorite)} size = 'lg' >Apply</Button>
                        {console.log(props.favorite)}
                        <br></br>
                        {props.favorite.has_applied ?
                        <div>
                        <Button variant = "outline-success"  size ='lg' onClick = {handleShow}>View Application</Button>
                        <Modal show={show} onHide={handleClose} style = {{width:`48% ! important`, top:'5%',left: '20px'}} >
                            <Modal.Header closeButton>
                                <Modal.Title>APPLICATION CONFIRMATION</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><h5>Thank You! Your Application has been Submitted to {props.favorite.school.school_name}, will contact you soon.</h5></Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-danger" onClick={handleClose}>
                                Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <br></br>
                        </div>
                        : null
                        }
                        <Button variant = "outline-danger" onClick = {() =>props.remove(props.favorite)} size = 'lg'>Remove </Button>
                        <br></br><br></br>
                        <a href = './' style={{color: 'green'}}><h3>Back</h3></a>
                    </Card.Body>
            </Card>
            </Col>
        </div> 
    
    )
    

}
export default FavoriteCards