import React from 'react'
import { Navbar } from 'react-bootstrap'

const LandingNavBar = () => 
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand href='#home'>
      <img alt='ConSearch Logo' src='' className='d-inline-block align-top' />
      {' ConSearch '}
    </Navbar.Brand>
  </Navbar>

export default LandingNavBar