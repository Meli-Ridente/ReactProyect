import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const NavigationComponent = () => {

  return( 
  <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand>
        Mis posts
      </Navbar.Brand>
      <Nav>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/posts' className='nav-link'>Posts</Link>
        <Link to='/about' className='nav-link'>About</Link>
        <Link to='/login' className='nav-link'>Login</Link>
      </Nav>
    </Container>
  </Navbar>
  )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
