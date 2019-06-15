import React from 'react'
import { Form, Col, Button, Navbar } from 'react-bootstrap'

const LandingNavBar = () => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand href='#home'>
      <img alt='ConSearch Logo' src='' className='d-inline-block align-top' />
      {' ConSearch '}
    </Navbar.Brand>
  </Navbar>
)

const SearchForm = () => {
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control placeholder='Enter your search...' />
        </Col>
        <Col>
          <Form.Label>Distance</Form.Label>
          <Form.Control as='select'>
            <option>Choose...</option>
            <option>10 mi</option>
            <option>25 mi</option>
            <option>50 mi</option>
            <option>75 mi</option>
            <option>100 mi</option>
          </Form.Control>
        </Col>
        <Col>
          <Button variant='primary'>Search</Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

const LandingPage = () => (
  <>
    <LandingNavBar />
    <div className='landing-info'>Find local music anywhere you go.</div>
    <SearchForm />
  </>
)

export default LandingPage
