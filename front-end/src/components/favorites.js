
import React from 'react'
import Row from "react-bootstrap/Row"
import FavoriteCards from './favoriteCards'

 class Favorites extends React.Component {

     state = {
         favorites: []
     }

     componentDidMount() {
        fetch(`http://localhost:3000/favoriteSchools/${localStorage.getItem('user')}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
         .then(data =>{ 
            console.log('this is data', data)
            this.setState({
                favorites: data
            })
        })
     }

      remove = (school) => {

            fetch(`http://localhost:3000/favoriteSchools/${localStorage.getItem('user')}/${school.school_id}`,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                }
            })
            console.log('remove school',school.id)
            let mySchools = this.state.favorites.filter(schools => {
                return schools.id !== school.id
            })
            this.setState({
                favorites: mySchools,
            })
     }


     render (){

         console.log(this.state.favorites)
         return(
          <Row>
          {this.state.favorites.map(favorite =>{
              return(
                  <FavoriteCards  favorite = {favorite}   remove = {this.remove}  />
              )
          })}
          </Row>
         )
     }
 }


 export default Favorites
