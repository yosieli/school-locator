import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class FavoriteCards extends React.Component {

    render () {
        return (
          <div>
           <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>School Name:{this.props.favorite.school.school_name}</Card.Title>
                    <Card.Text>Description: {this.props.favorite.school.description}</Card.Text>
                    <Card.Text>Rating: {this.props.favorite.school.rating}</Card.Text>

                    <Button variant="primary">Applay</Button>
                    <Button variant = "danger" onClick = {() =>this.props.remove(this.props.favorite)}>Remove </Button>
                </Card.Body>
            </Card>
          </div>
        )
    }

}
export default FavoriteCards