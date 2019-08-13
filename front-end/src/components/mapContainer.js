import React from 'react'
import { Map, GoogleApiWrapper, Marker,InfoWindow} from 'google-maps-react'
import Details from './details'


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
        console.log(this.state.schools)
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: !this.state.showingInfoWindow
        })
        
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
            return <Marker key={index} id={school.id} position={{
            lat: school.latitude,
            lng: school.longitude,
            }}
            onClick = {this.onMarkerClick}   />
        })
    }


    addToFavorites = (school) => {
        fetch(`http://localhost:3000/favorites/${localStorage.getSchool('user')}/${school.id}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getSchool('token')}` 
            },
            body: JSON.stringify({
                user_id: localStorage.getSchool('user'),
                school_id: school.id,
                school_name: school.school_name,
                description: school.description,
            })
        })
        console.log (' clicked')
    }

    

    render() {
        return (
            <div>
                <Map 
                    google={this.props.google}
                    zoom={8}
                    style={{width: '100%', height: '100%', topmargin: '10px'}}
                    initialCenter={{ lat: 29.731589, lng: -95.310856}}
                >
                    
                {this.displayMarkers()}

                <InfoWindow 
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}

                > 
                <Details school ={this.state.schools && this.state.selectedPlace ? this.state.schools.find(school=> school.id === this.state.selectedPlace.id) || {} : null} addToFavorites = {this.addToFavorites}/>
                </InfoWindow>

                </Map>
               
            </div>
        )
    }
}

export default GoogleApiWrapper ({
    apiKey: 'AIzaSyCGkLGCv3BgUFVYOfNBk5oBmvH6ou-wU8w'
  })(MapContainer)

