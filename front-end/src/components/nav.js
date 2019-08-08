import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

 function  NavHome (props) {
   
         return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">school locator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Favorites</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                </NavDropdown>
              </Nav>
              <Form inline>
                
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
              {/* <Nav.Link href= "#logout" className="mr-auto">Sign Out</Nav.Link> */}
              <Nav.Link onClick={() => {
                localStorage.clear()
                props.history.push('/sign-in')
  
              }} > Sign-Out 
              </Nav.Link>

            </Navbar.Collapse>
          </Navbar>
          
         )
     
    }

export default NavHome