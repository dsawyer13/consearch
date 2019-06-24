import React, { useState, useContext } from 'react'
import { Form, Col, Button, Navbar } from 'react-bootstrap'
import { StoreContext } from '../store'
import { TM_URL, ITUNES_URL } from '../apiUrl'

const ResultsBar = () => {
  const [city, setCity] = useState('')
  const [distance, setDistance] = useState('')
  const [state, dispatch] = useContext(StoreContext)

  const fetchResults = async (city, distance) => {
    fetch(`${TM_URL}&city=${city}&distance=${distance}`)
      .then(res => res.json())
      .then(response => dispatch({type: 'FETCH_RESULTS', payload: response}))
      .catch(err => console.error('ERROR:', err))
  }

  const onSubmit = e => {
    e.preventDefault()
    if (city.trim() === '') return;
    let distNum = distance.substr(0, distance.length - 3)
    fetchResults(city, distNum)
    setCity('')
    setDistance('Choose...')
  }
  
  return(
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <img alt='ConSearch Logo' src='google.com' className='d-inline-block align-top' />
        {' ConSearch '}
      </Navbar.Brand>
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
    </Navbar>
  )
}

const Result = props => {
  const hdPic = props.pics.filter(pic => pic.ratio === '4_3')[0].url
  console.log(hdPic)
  return (
  <div className='container'>
    <img src={hdPic} alt='artist' />
    <div className='content'>
      <div className='info'>
        <div className='date'>{props.date}</div>
        <div className='artist'>{props.name}</div>
        <div className='venue'>@ {props.venue}</div>
      </div>
      <div className='buttons'>
        <Button id={props.name}variant='outline-primary'>Play Music</Button>
        <Button href={props.tmLink} variant='outline-primary'>Buy Tickets</Button>
      </div>
      {/* add audio player later */}
      {/* <div className='audio-player'>
        <audio controls>
          <source src={props.song} type='audio/mpeg' />
        </audio>
      </div> */}
    </div>
  </div>
  )
}

const ResultsPage = () => {
  const [state, dispatch] = useContext(StoreContext)

  return (
    <div className='results-page'>
      <ResultsBar />
      {state.results.map((result, index) => 
      // console.log(result)
        <Result 
          key={index}
          pics={result.images}
          date={result.dates.start.localDate}
          name={result.name}
          venue={result._embedded.venues[0].name}
          tmLink={result.url}
        />
      )}
    </div>
  )
}

export default ResultsPage
