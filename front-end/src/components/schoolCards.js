import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class SchoolCards extends React.Component {

    render(){
        return(
            <div>
               <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{this.props.school.school_name}</Card.Title>
                        <Card.Text>
                        {this.props.school.rating}
                        </Card.Text>
                        <Card.Text>
                        {this.props.school.description}
                        </Card.Text>

                        <Button variant="primary">Applay</Button>
                        <Button variant="primary">remove</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default SchoolCards
