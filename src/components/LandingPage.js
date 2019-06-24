import React, { useState, useContext } from 'react'
import { Form, Col, Button, Navbar } from 'react-bootstrap'
import { StoreContext } from '../store'
import { withRouter } from 'react-router-dom'
import { TM_URL } from '../apiUrl'

const LandingNavBar = () => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand href='#home'>
      <img alt='ConSearch Logo' src='' className='d-inline-block align-top' />
      {' ConSearch '}
    </Navbar.Brand>
  </Navbar>
)


export const SearchForm = withRouter(({ history }) => {
  /* When city & distance inputs change, the hooks for city and distance change
  their state. */ 
  const [city, setCity] = useState('')
  const [distance, setDistance] = useState('')
  const [state, dispatch] = useContext(StoreContext)

  //Fetch results from ticketMaster API and set it in context
  const fetchResults = async (city, distance) => {
    fetch(`${TM_URL}&city=${city}&distance=${distance}`)
      .then(res => res.json())
      .then(response => dispatch({type: 'FETCH_RESULTS', payload: response}))
      .catch(err => console.error('ERROR:', err))
  }

  /*on submit of the form, the city and distance state are sent as query
  parameters for the fetchResults function, redirect to results page*/
  const onSubmit = e => {
    e.preventDefault()
    if (city.trim() === '') return;
    let distNum = distance.substr(0, distance.length - 3)
    fetchResults(city, distNum)
    setCity('')
    setDistance('Choose...')
    history.push('/results')
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Row>
        <Col>
          <Form.Control
            placeholder='Enter your search...'
            onChange={e => setCity(e.target.value)}
            value={city}
            name='city'
          />
        </Col>
        <Col>
          <Form.Label>Distance</Form.Label>
          <Form.Control
            as='select'
            onChange={e => setDistance(e.target.value)}
            value={distance}
            name='distance'
          >
            <option>Choose...</option>
            <option>10 mi</option>
            <option>25 mi</option>
            <option>50 mi</option>
            <option>75 mi</option>
            <option>100 mi</option>
          </Form.Control>
        </Col>
        <Col>
          <Button type='submit' variant='primary'>Search</Button>
        </Col>
      </Form.Row>
    </Form>
  )
})

const LandingPage = () => (
  <>
    <LandingNavBar />
    <div className='landing-info'>Find local music anywhere you go.</div>
    <SearchForm />
  </>
)

export default LandingPage