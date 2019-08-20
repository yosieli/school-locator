import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import MapContainer from './mapContainer'
import Header from './header'
import './dropdown.css'

 class   NavHome  extends React.Component {

   state = {
     searchTerm: '',
     filterByGrade: '',
     allGrades: ''
   }

   changeSearchTerm = (e) => {
     this.setState({
       searchTerm: e.target.value,
       filterByGrade: ''
     })

   }

   handelAllGrades = (e) => {
     this.setState({
       allGrades: e.target.value,
       filterByGrade: ''
     })
   }

   handleFilter = (e) => {
     this.setState({
       filterByGrade: e.target.innerText
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
            <Navbar.Brand href = "#home"> <h1 style={{color: "#3ED949"}} >Find a School and Enroll </h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" >
                <Nav.Link href="/home" ><h3 style={{color: "white",fontSize: '38px'}}>Home</h3></Nav.Link>
                <Nav.Link href="/favorites"><h3 style={{color: "white", fontSize: '38px'}}>Favorites</h3></Nav.Link>
                <NavDropdown title = "Grades" style={{fontSize: '35px',backgroundColor:'white'}} >
                  <NavDropdown.Item   style={{fontSize:'30px'}} onClick = {(e) =>this.handelAllGrades(e)}>all_grades</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>pre-k</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-01</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-2</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-3</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-4</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-5</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-6</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-7</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-8</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-9</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-10</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-11</NavDropdown.Item>
                  <NavDropdown.Item   onClick = {(e)=>this.handleFilter(e)} style={{fontSize:'30px'}}>grade-12</NavDropdown.Item>
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
          {/* <Header/> */}
          <MapContainer searchTerm = {this.state.searchTerm}  filterTerm = {this.state.filterByGrade} onSearch = {this.changeSearchTerm} onFilter = {this.handleFilter} allGrades = {this.handelAllGrades}/>

        </div>
      )

   }
   
      
     
    }

export default NavHome