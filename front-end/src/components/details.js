import React from 'react'
class Details extends React.Component {

   render(){

      return(
          <div>
          {console.log('in Deatils', this.props.school)}
             <p>school_name: {this.props.school.school_name}</p>
             <p>description: {this.props.school.description}</p>
             <p>Rating: {this.props.school.rating}</p>
             <button onClick = {() => this.props.addToFavorites(this.props.school)}>Add To Favorites</button>
          </div>
      )
   }

}

export default Details
