import React from 'react';
import {Navbar,Nav,Container,Button,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { logout } from '../Actions/AuthAction'
import {useDispatch} from 'react-redux'
import "./Header.css"
import data from '../Product/Product.json'


  
const Header = () => {
  const dispatch=useDispatch();
  let navigate = useNavigate();
 const loggedOut=()=>{
    dispatch(logout())
    navigate('login');
}
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#"> <img src="./Image/logo1.jpg" alt="img1" style={{width : '40%'}}/></Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/"><h5>Home</h5></Nav.Link>
      <Nav.Link as={Link} to="/about"><h5>About</h5></Nav.Link>
      <Nav.Link as={Link} to="/contact"><h5>Contact</h5></Nav.Link>
      <NavDropdown
          id="nav-dropdown-dark-example"
          title="BOOKS"
          menuVariant="dark" >
            {
              data.Product.map((book)=>(
                <NavDropdown.Item>
                  {
                    <Link to={`/booksub/${book.b_id}`} className="dropdown">{book.b_name}</Link>
                  }
                  </NavDropdown.Item>
                  
              ))
            }
    {/* <NavDropdown.Item tag={Link} to={`/booksub`}>Fiction Books
    </NavDropdown.Item>
    <NavDropdown.Item href={`/booksub`}>Autobiography books</NavDropdown.Item>
    <NavDropdown.Item href="#/action-3">Thriller Books</NavDropdown.Item>
    <NavDropdown.Item href="#/action-3">Mystery Books</NavDropdown.Item>
     <NavDropdown.Item href="#/action-3">Horror Books</NavDropdown.Item> */}
     </NavDropdown>
      <Nav.Link as={Link} to="/bookcategory"><h5>Books</h5></Nav.Link>
      <Nav.Link as={Link} to="/reg"><h5>Registration</h5></Nav.Link>
      <Nav.Link as={Link} to="/login"><h5>Login</h5></Nav.Link>
      <Nav.Link as={Link} to="/cart"><h5>Cart</h5></Nav.Link>  
      <Button onClick={loggedOut}>Logout
      </Button>
    </Nav>
    </Container>
  </Navbar>
 </>
    )
}

export default Header
