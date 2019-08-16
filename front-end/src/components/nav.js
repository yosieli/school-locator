import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import MapContainer from './mapContainer'
import './dropdown.css'

 class   NavHome  extends React.Component {

   state = {
     searchTerm: '',
     filterByGrade: ''
   }

   changeSearchTerm = (e) => {
     this.setState({
       searchTerm: e.target.value
     })

   }

   handleFilter = (e) => {
     this.setState({
       filterByGrade: e.target.value
     })
   }

   render (){
     return(
        <div >
          <Navbar expand="lg"  style={{backgroundColor: "#000088"}}>
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src="https://image.shutterstock.com/image-vector/classical-school-building-bus-isolated-260nw-306667898.jpg"
                width="80"
                height="80"
                className="d-inline-block align-top"
               
              />
            </Navbar.Brand>
            <Navbar.Brand href = "#home"> <h1 style={{color: "white"}} >School Finder</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" >
                <Nav.Link href="/home" ><h3 style={{color: "white"}}>Home</h3></Nav.Link>
                <Nav.Link href="/favorites"><h3 style={{color: "white"}}>Favorites</h3></Nav.Link>
                <NavDropdown title = "Grades" style={{color: 'red'}}   >
                  <NavDropdown.Item href="#action/3.1" onChange = {(e)=>this.handleFilter(e)}>pre-k</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onChange = {(e)=>this.handleFilter(e)}>first_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onChange = {(e)=>this.handleFilter(e)}>second_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" onChange = {(e)=>this.handleFilter(e)}>third_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onChange = {(e)=>this.handleFilter(e)}>forth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onChange = {(e)=>this.handleFilter(e)}>fifth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" onChange = {(e)=>this.handleFilter(e)}>sixth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onChange = {(e)=>this.handleFilter(e)}>seventh_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onChange = {(e)=>this.handleFilter(e)}>eighth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" onChange = {(e)=>this.handleFilter(e)}>nineth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onChange = {(e)=>this.handleFilter(e)}>tenth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" onChange = {(e)=>this.handleFilter(e)}>eleventh_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onChange = {(e)=>this.handleFilter(e)}>twelvth_grade</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <h3 style = {{color: 'white'}}> Grades</h3> */}
                </NavDropdown>
              </Nav>
              <Form inline>
                
                <FormControl type="text" placeholder="Search by zip-code" className="mr-sm-2" onChange = {(e)=> this.changeSearchTerm(e)}/>
                <Button  variant="success" size="lg" >Search</Button>
              </Form>
              {/* <Nav.Link href= "#logout" className="mr-auto">Sign Out</Nav.Link> */}
              <Nav.Link onClick={() => {
                  localStorage.clear()
                 this.props.history.push('/sign-in')
    
                }} > <Button  variant="success" size="lg">Sign-Out </Button>
              </Nav.Link>

           </Navbar.Collapse>
          </Navbar>
          <MapContainer searchTerm = {this.state.searchTerm} onSearch = {this.changeSearchTerm} onFilter = {this.handleFilter}/>

        </div>
      )

   }
   
      
     
    }

export default NavHome