import React from 'react'
import ReactDOM from 'react-dom'
import { Map, GoogleApiWrapper, Marker,InfoWindow} from 'google-maps-react'
import Details from './details'
import Button from 'react-bootstrap/Button'


 class MapContainer extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            schools: [{latitude: 29.774787, longitude: -95.380721},
                     {latitude: 29.763005, longitude: -95.282988}],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }


    onMarkerClick = (props, marker, e) => {
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: !this.state.showingInfoWindow
        })
        
    }

    onInfoWindowOpen(props, e, selectedPlace) {
        const button = (
        <Button
            variant="outline-success"
            onClick={()=>this.addToFavorites(selectedPlace)}
        >Add To Favorites
        </Button>
        )
        ReactDOM.render(
        React.Children.only(button),
        document.getElementById("i")
        )
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
    }


    
    componentDidMount(){
        fetch('http://localhost:3000/schools', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
          .then(data=>{
            this.setState({
                schools: data
            })
        })
        
    }

    
    displayMarkers = () => {
        return this.state.schools.map((school, index) => {
            return < Marker key={index} id={school.id} position={{
            lat: school.latitude,
            lng: school.longitude,
            }}
            onClick = {this.onMarkerClick}  
             />
        })
    }


    addToFavorites = (school) => {
        
        fetch(`http://localhost:3000/addFavorites`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({
                user_id: localStorage.getItem('user'),
                school_id: school.id,
                school_name: school.school_name,
                description: school.description,
                rating: school.rating
                
            })
        })
        .then(res =>res.json())
        .then(result => {console.log(result)})
      
    }
    

    

    render() {
    let selectedPlace = this.state.schools.find(school => school.id === this.state.selectedPlace.id) || null || {}
    console.log('mapContainer loaded')

        return (
            <div>
            {console.log('this is schools', this.state.schools)}
                <Map 
                    google={this.props.google}
                    zoom={12}
                    style={{width: '100%', height: '100%', topmargin: '10px'}}
                    initialCenter={{ lat: 29.731589, lng: -95.310856}}
                >
                    
                {this.displayMarkers()}

                <InfoWindow 
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    onOpen={e => {
                    this.onInfoWindowOpen(this.props, e, selectedPlace);
                    }}
                > 
                   <Details school = {selectedPlace}  />
                    <div id = "i"/>

                </InfoWindow>

                </Map>
               
            </div>
        )
    }
}

export default GoogleApiWrapper ({
    apiKey: 'AIzaSyCGkLGCv3BgUFVYOfNBk5oBmvH6ou-wU8w'
  })(MapContainer)

