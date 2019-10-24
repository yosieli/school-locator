
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

    handleApply = (school) =>{
         fetch(`http://localhost:3000/favoriteSchools/${localStorage.getItem('user')}/${school.school_id}`,{
             method: "PATCH",
             headers:{
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${localStorage.getItem('token')}`
             },
             body: JSON.stringify({
                 has_applied: true
             })
         })
         .then(r => r.json())
         .then( fav => {
             this.setState({
                 favorites: this.state.favorites.map( eachFav => eachFav.id === fav.id ? fav : eachFav )
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
             console.log('remove school',school.school_id)
            let mySchools = this.state.favorites.filter(schools => {
                return schools.id !== school.id
            })
            this.setState({
                favorites: mySchools
            })
    }


    render (){

        let allFavorites = this.state.favorites
        console.log(allFavorites.length)
       
        return(
          <Row style = {{backgroundColor: '#b3cccc',height: '100vh'}}>   
                    {
                        allFavorites.length > 0  ?
                            allFavorites.map(favorite =>{
                            return<FavoriteCards  favorite = {favorite}   remove = {this.remove}   applay ={()=>this.handleApply(favorite)}/>
                            })
                        :
                        <a href ="./" style={{fontSize: '50px',marginLeft: '50px'}}>Back</a>
                    }
          </Row>
        )
    }
 }


 export default Favorites
