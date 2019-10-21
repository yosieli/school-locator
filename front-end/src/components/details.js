import React from 'react'
class Details extends React.Component {
   
     
   render(){
       console.log('this is my details', this.props.school.school_name)
      return(
          <div>
             <h3 style ={{color: '#000066'}}>School Name: {this.props.school.school_name}</h3>
             <h4>Description: {this.props.school.description}</h4>
             <h4>Rating: {this.props.school.rating}</h4>
             <h4>Zip_Code:{this.props.school.zip_code} </h4>
             <h4>Grade: {this.props.school.grade}</h4>
          </div>
      )
   }

}

export default Details
