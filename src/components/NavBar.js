import React from 'react'
import { Form, Button, Navbar, FormControl } from 'react-bootstrap'

const NavBar = () =>
  <Navbar bg='dark' variant='dark'>
    <NavBar.Brand href='#home'>
      <img alt='ConSearch Logo' src='' className='d-inline-block align-top' />
      {' ConSearch '}
    </NavBar.Brand>
    <Form inline>
      <FormControl
        type='text'
        placeholder='Search by city...'
        className='mr-sm-2'
      />
      <Button variant='outline-info'>Search</Button>
    </Form>
  </Navbar>

export default NavBar