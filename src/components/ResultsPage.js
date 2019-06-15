import React, { useEffect } from 'react'
// import Result from './Result'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_RESULTS } from '../actions/index'
import { Form, Button, Navbar, FormControl } from 'react-bootstrap'

const NavBar = () => (
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
)

const Result = props => (
  <div className='container'>
    <img src={props.img} alt='artist'/>
    <div className='content'>
      <div className='info'>
        <div className='date'>{props.date}</div>
        <div className='artist'>{props.artist}</div>
        <div className='venue'>{props.venue}</div>
      </div>
      <div className='buttons'>
        <Button variant='outline-primary'>Play Music</Button>
        <Button variant='outline-primary'>Buy Tickets</Button>
      </div>
      <div className='audio-player'>
        <audio controls>
          <source src={props.song} type='audio/mpeg' />
        </audio>
      </div>
    </div>
  </div>
)

const ResultsPage = () => {
  const results = useSelector(state => state.results)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: FETCH_RESULTS })
  })

  // const results = this.props.results.map((result, index) => {}

  return (
    <div className='results-page'>
      <NavBar />
      {results}
    </div>
  )
}

export default ResultsPage
