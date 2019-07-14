import React, { useState, useContext } from 'react'
import { StoreContext } from '../store'
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { TM_URL } from '../apiUrl'
import './styling/css/landing.css'
import './styling/css/common.css'
import Concert from './styling/Concert.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMusic, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faMusic, faTicketAlt)

const LandingNavBar = () => (
  // make a link
  <div className='logo landing-logo'>ConSearch</div>
)

export const SearchForm = withRouter(({ history }) => {
  /* When city & distance inputs change, the hooks for city and distance change
  their state. */

  const [city, setCity] = useState('')
  const [distance, setDistance] = useState('')
  const [state, dispatch] = useContext(StoreContext)

  // Fetch results from ticketMaster API and set it in context
  const fetchResults = (city, distance) => {
    fetch(`${TM_URL}&city=${city}&distance=${distance}`)
      .then(res => res.json())
      .then(response => {
        // condense these
        dispatch({ type: 'FETCH_RESULTS', payload: response })
        dispatch({ type: 'SET_CITY', payload: city })
        dispatch({ type: 'SET_DISTANCE', payload: distance })
        dispatch({ type: 'SET_PAGE' })
        dispatch({ type: 'SET_LAST_PAGE', payload: response })
      })
      .catch(err => console.error('ERROR:', err.message))
  }

  /* on submit of the form, the city and distance state are sent as query
  parameters for the fetchResults function, redirect to results page */
  const onSubmit = e => {
    e.preventDefault()
    if (city.trim() === '') return
    let distNum = distance.substr(0, distance.length - 3)
    fetchResults(city, distNum)
    setCity('')
    setDistance('Distance...')
    history.push('/results')
  }

  return (
    <Form className='search-form' onSubmit={onSubmit}>
      <Form.Control
        className='city-input input'
        type='text'
        placeholder='Enter a City...'
        onChange={e => setCity(e.target.value)}
        value={city}
        name='city'
      />
      <Form.Control
        className='dist-input input'
        as='select'
        onChange={e => setDistance(e.target.value)}
        value={distance}
        name='distance'
        placeholder='Distance...'
      >
        <option>10 mi</option>
        <option>25 mi</option>
        <option>50 mi</option>
        <option>75 mi</option>
        <option>100 mi</option>
      </Form.Control>

      <Button className='landing-btn' type='submit'><FontAwesomeIcon icon='search' size='sm' /><span className='hidden-text'>Search</span></Button>
    </Form>
  )
})

const LandingPage = () => (
  <body className='landing-body'>
    <LandingNavBar />
    <div className='landing-content'>
      <h1>Find Local Music</h1>
      <h1>Wherever You Are</h1>
      <p>
        ConSearch helps you search for upcoming music events and lets you listen
        to what will be playing at the event.
      </p>
      <SearchForm />
    </div>
    <img className='bgImage' alt='background' src={Concert} />
  </body>
)

export default LandingPage
