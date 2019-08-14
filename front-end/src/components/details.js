import React from 'react'
import Button from 'react-bootstrap/Button'
class Details extends React.Component {
   
     
   render(){
      // console.log(this.props.school)
      console.log('Details rendered')
      return(
          <div>
             <h4>school_name: {this.props.school.school_name}</h4>
             <h4>description: {this.props.school.description}</h4>
             <h4>Rating: {this.props.school.rating}</h4>
          </div>
      )
   }

}

export default Details
