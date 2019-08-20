
import React from 'react'
import Row from "react-bootstrap/Row"
import FavoriteCards from './favoriteCards'
import ApplicationForm from './applicationForm';

 class Favorites extends React.Component {

     state = {
         favorites: [],
         showCards: false,
         showForm:false,

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

     handleShowCard = () =>{
         this.setState({
             cardsShow:!this.state.cardsShow
         })

     }


     handleShowForm = (school) =>{
         fetch(`http://localhost:3000/favoriteSchools/${localStorage.getItem('user')}/${school.school_id}`,{
             method: "PATCH",
             headers:{
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${localStorage.getItem('token')}`
             },
             body: JSON.stringify({
                 has_applied:false
             })
         })
         this.setState({
             favorites:this.state.favorites
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
             console.log('remove school',school.school_id)
            let mySchools = this.state.favorites.filter(schools => {
                return schools.id !== school.id
            })
            this.setState({
                favorites: mySchools
            })
     }


     sendToPage = () => {
         this.props.history.push('/applicationSubmit')
     }

     render (){

         console.log(this.state.favorites)
         return(
          <Row style = {{backgroundColor: '#a3a375',height: '100vh'}}>
          {this.state.favorites.map(favorite =>{
              return(
                  <div>
                    <FavoriteCards  favorite = {favorite}   remove = {this.remove}  sendToPage={this.sendToPage} applay ={()=>this.handleShowForm(favorite)}/>
                  </div>
                  )
          })}
          </Row>
         )
     }
 }


 export default Favorites
