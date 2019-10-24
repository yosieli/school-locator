import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import MapContainer from './mapContainer'
import {withRouter} from 'react-router'


 class  NavHome  extends React.Component {  

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
        filterByGrade: '',
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
            <Navbar expand="lg"  style={{backgroundColor: "#00008B"}} variant = "pills" defaultActiveKey="/home">
              <Navbar.Brand href = "/home">
                <img
                  alt="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfXSt7wBssICXCkj3CFBJOrPUHI0azS7ETMoP8wuivapPsqVG"
                  width="90"
                  height="90"
                  className="d-inline-block align-top"
                
                />
              </Navbar.Brand>
              <Navbar.Brand href = "#home"> <h1 style={{color: "#F1084B"}} >Find a School and Enroll </h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                  <Nav.Link href="/sign-up" ><h3 style={{color: "white",fontSize: '40px',fontStyle: 'arial', marginLeft: '80px'}}>Home</h3></Nav.Link><br></br><br></br>
                  <Nav.Link href="/favorites"><h3 style={{color: "white", fontSize: '40px', marginLeft: '100px'}}>Favorites</h3></Nav.Link><br></br><br></br>
                </Nav>
                <NavDropdown title = "Grades" style={{fontSize: '35px',backgroundColor:'white',right: '30px',fontColor: ''}} >
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
                </NavDropdown>
              
                <Nav>
                  <Form inline style = {{position:'relative',padding: '0px',margin: '0px'}}>
                    
                    <FormControl type="text" placeholder="Search by zip-code" className="mr-sm-2" onChange = {(e)=> this.changeSearchTerm(e)} style={{height: '50px',margin: '0px',paddingLeft: '30px'}}/>
                     <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYzMtLaVXDPydWiAP8SpDJcv6_EPXetPOx6XPuRB0sfg489cK' style ={{position:'absolute',bottom:'8px',left: '200px',width: '30px',height: '30px'  }}></img>
                   </Form>
                </Nav>
                
                <Nav.Link  > <Button  variant="success" size="lg" onClick={() => {
                    localStorage.clear()
                  this.props.history.push('/sign-in')
      
                  }}>Sign-Out </Button>
                </Nav.Link>

              </Navbar.Collapse>
            </Navbar>
            <MapContainer searchTerm = {this.state.searchTerm}  filterTerm = {this.state.filterByGrade} onSearch = {this.changeSearchTerm} onFilter = {this.handleFilter} allGrades = {this.handelAllGrades}/>

          </div>
      )

    }
   
      
     
  }

export default NavHome