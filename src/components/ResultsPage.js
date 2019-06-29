import React, { useState, useContext, useEffect } from 'react'
import { Form, Col, Button, Navbar } from 'react-bootstrap'
import { StoreContext } from '../store'
import { TM_URL, ITUNES_URL } from '../apiUrl'

const ResultsBar = () => {
  const [city, setCity] = useState('')
  const [distance, setDistance] = useState('')
  const [state, dispatch] = useContext(StoreContext)

  const fetchResults = (city, distance) => {
    fetch(`${TM_URL}&city=${city}&distance=${distance}`)
      .then(res => res.json())
      .then(response => {
        dispatch({type: 'FETCH_RESULTS', payload: response})
        dispatch({type: 'SET_CITY', payload: city})
        dispatch({type: 'SET_DISTANCE', payload: distance})
        dispatch({type: 'SET_PAGE'})
      })
      .catch(err => console.error('ERROR:', err))
  }

  const onSubmit = e => {
    e.preventDefault()
    if (city.trim() === '') return;
    let distNum = distance.substr(0, distance.length - 3)
    fetchResults(city, distNum)
    // setCity('')
    // setDistance('Choose...')
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
  const [audio, setAudio] = useState('')
  const [error, setError] = useState('')
  const hdPic = props.pics.filter(pic => pic.ratio === '4_3')[0].url
  const name = (props.rawName.attractions) ? props.rawName.attractions[0].name : ''

  const fetchAudio = artist => {
      const artistURI = encodeURIComponent(artist);
      fetch(`${ITUNES_URL}${artistURI}`)
        .then(res => res.json())
        .then(response => {
          if (response.results.length < 1) {
            throw new Error('Invalid Artist')
          }
          setError('')
          setAudio(
            <audio controls='controls' src={response.results[0].previewUrl}></audio>
          )
        })
        .catch(setError('Music Unavailable'))
    }
  
  return (
  <div className='container'>
    <img src={hdPic} alt='artist' />
    <div className='content'>
      <div className='info'>
        <div className='date'>{props.date}</div>
        <div className='artist'>{props.title}</div>
        <div className='venue'>@ {props.venue}</div>
      </div>
      <div className='buttons'>
        <Button variant='outline-primary' onClick={() => {fetchAudio(name)}}>Play Music</Button>
        <Button href={props.tmLink} variant='outline-primary'>Buy Tickets</Button>
      </div> 
      <div className='audio-player'>
        {audio}
      </div>
      <div className='error'>{error}</div>
    </div>
  </div>
  )
}

const Pagination = () => {
  const [state, dispatch] = useContext(StoreContext)
  const currentPage = state.page
  
  const lastPage = () => {
    fetch(`${TM_URL}&city=${state.city}&distance=${state.distance}&page=${currentPage - 1}`)
    .then(res => res.json())
    .then(response => {
      dispatch({type: 'FETCH_RESULTS', payload: response})
      dispatch({type: 'LAST_PAGE', payload: currentPage-1})
    })
    .catch(err => console.error('ERROR:', err.message))
  }

  const nextPage = () => {
    fetch(`${TM_URL}&city=${state.city}&distance=${state.distance}&page=${currentPage + 1}`)
      .then(res => res.json())
      .then(response => {
        dispatch({type: 'FETCH_RESULTS', payload: response})
        dispatch({type: 'NEXT_PAGE', payload: currentPage+1})
      })
      .catch(err => console.error('ERROR:', err.message))
  }

  const lastButton = (currentPage === 1) ? '' : <Button variant='outline-primary' onClick={lastPage}>Last Page</Button>
  const nextButton = (currentPage <= state.lastPage) ? <Button variant='outline-primary' onClick={nextPage}>NextPage</Button> : ''

  return (
    <div className="button-container">
      {lastButton}
      {nextButton}
    </div>
  )
}

const ResultsPage = () => {
  const [state, dispatch] = useContext(StoreContext)

  useEffect(() => {
    window.scrollTo(0,0)
  })
  
  return (
    <div className='results-page'>
      <ResultsBar />
      {state.results.map((result, index) => 
        <Result 
          rawName={result._embedded}
          key={index}
          pics={result.images}
          date={result.dates.start.localDate}
          title={result.name}
          venue={result._embedded.venues[0].name}
          tmLink={result.url}
        />
      )}
      <Pagination />
    </div>
  )
}

export default ResultsPage
