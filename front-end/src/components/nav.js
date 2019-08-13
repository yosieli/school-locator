import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import MapContainer from './mapContainer';

 function  NavHome (props) {
   
      return(
        <div>
          <Navbar expand="lg"  style={{backgroundColor: "#726666"}}>
            <Navbar.Brand href="#home"><h5 style = {{color: 'white'}}>School Finder</h5></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" >
                <Nav.Link href="/sign-in"><h5 style={{color: "white"}}>Home</h5></Nav.Link>
                <Nav.Link href="#link"><h5 style={{color: "white"}}>Favorites</h5></Nav.Link>
                <NavDropdown title="Grades" id="basic-nav-dropdown" style={{color: "white"}}>
                  <NavDropdown.Item href="#action/3.1">pre-k</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">first_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">second_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">third_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">forth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">fifth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">sixth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">seventh_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">eighth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">nineth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">tenth_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">eleventh_grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">twelvth_grade</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <h5 style = {{color: 'white'}}> Grades</h5> */}
                </NavDropdown>
              </Nav>
              <Form inline>
                
                <FormControl type="text" placeholder="Search by zip-code" className="mr-sm-2" />
                <Button  variant="success">Search</Button>
              </Form>
              {/* <Nav.Link href= "#logout" className="mr-auto">Sign Out</Nav.Link> */}
              <Nav.Link onClick={() => {
                  localStorage.clear()
                  props.history.push('/sign-in')
    
                }} > <Button  variant="success">Sign-Out </Button>
              </Nav.Link>

           </Navbar.Collapse>
          </Navbar>
          <MapContainer/>

        </div>
      )
     
    }

export default NavHome