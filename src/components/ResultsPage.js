import React, { useState, useContext, useEffect } from 'react'
import { StoreContext } from '../store'
import { TM_URL, ITUNES_URL } from '../apiUrl'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './styling/css/results.css'
import './styling/css/common.css'


//nav bar with included search form
const ResultsBar = () => {
  const [city, setCity] = useState('')
  const [distance, setDistance] = useState('')
  const [state, dispatch] = useContext(StoreContext)

  const fetchResults = (city, distance) => {
    fetch(`${TM_URL}&city=${city}&distance=${distance}`)
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'FETCH_RESULTS', payload: response })
        dispatch({ type: 'SET_CITY', payload: city })
        dispatch({ type: 'SET_DISTANCE', payload: distance })
        dispatch({ type: 'SET_PAGE' })
      })
      .catch(err => console.error('ERROR:', err))
  }

  //grab value from distance input and trim 'mi'
  const onSubmit = e => {
    e.preventDefault()
    if (city.trim() === '') return
    let distNum = distance.substr(0, distance.length - 3)
    fetchResults(city, distNum)
  }

  return (
    <nav>
      <div className='logo nav-logo'>
      <Link to='/'> ConSearch</Link>
      </div>
      <Form className='nav-form' onSubmit={onSubmit}>
        <Form.Control
         className='city-input input'
          placeholder='Enter a city...'
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
        <Button type='submit'>Search</Button>
      </Form>
    </nav>
  )
}

const Result = props => {
  const [audio, setAudio] = useState('')
  const [error, setError] = useState('')

  //grab pic with same ratio for each artist, because list of pics isn't ordered
  const hdPic = props.pics.filter(pic => pic.ratio === '4_3')[0].url
  
  //conditional rendering based on if json object has a particular property
  const name = props.rawName.attractions
    ? props.rawName.attractions[0].name
    : ''

  //format date
  const date = new Date(props.date)
  const year = date.getFullYear()
  let month = date.getMonth()+1
  let dt = date.getDate();
  if (dt < 10) {
    dt = '0' + dt
  }
  if (month < 10) {
    month = '0' + month
  }
  const newDate = month+'/'+dt+'/'+year

//  Search for artist on iTunes API
//  if the artist exists, add a music sample,
//  else display error message
  const fetchAudio = artist => {
    const artistURI = encodeURIComponent(artist)
    fetch(`${ITUNES_URL}${artistURI}`)
      .then(res => res.json())
      .then(response => {
        if (response.results.length < 1) {
          throw new Error('Invalid Artist')
        }
        setError('')
        setAudio(
          <audio controls='controls' src={response.results[0].previewUrl} />
        )
      })
      .catch(err => setError('Music Unavailable'))
  }

  return (
    <div className='result-item'>
      <div className='photo'>
       <img src={hdPic} alt='artist' />
      </div>
        <div className='info'>
          <div className='date'>{newDate}</div>
          <div className='artist'>{props.title}</div>
          <div className='venue'>@ {props.venue}</div>
          <div className='audio-player'>{audio}</div>
          <div className='error'>{error}</div>
        </div>
        <div className='buttons'>
          <Button className='ticket-button' variant='danger' target='_blank' href={props.tmLink}>TICKETS</Button>
          <Button
            className='play-button'
            variant='warning'
            onClick={() => {
              fetchAudio(name)
            }}
          >
            PLAY
          </Button>
        </div>
      </div>
  )
}


//Handcoded pagination, after clicking next or last,
//the page value is updated in store,
//and new request is sent to TicketMasterAPI
const Pagination = () => {
  const [state, dispatch] = useContext(StoreContext)
  const currentPage = state.page

  const lastPage = () => {
    fetch(
      `${TM_URL}&city=${state.city}&distance=${
        state.distance
      }&page=${currentPage - 1}`
    )
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'FETCH_RESULTS', payload: response })
        dispatch({ type: 'LAST_PAGE', payload: currentPage - 1 })
      })
      .catch(err => console.error('ERROR:', err.message))
  }
  //If this is the last page of results, don't render the button
  const nextPage = () => {
    fetch(
      `${TM_URL}&city=${state.city}&distance=${
        state.distance
      }&page=${currentPage + 1}`
    )
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'FETCH_RESULTS', payload: response })
        dispatch({ type: 'NEXT_PAGE', payload: currentPage + 1 })
      })
      .catch(err => console.error('ERROR:', err.message))
  }
  //If this is the first page, don't render
  const lastButton =
    currentPage === 1 ? '' : <Button className='last' onClick={lastPage}>Last</Button>
  const nextButton =
    currentPage <= state.lastPage ? (
      <Button className='next' onClick={nextPage}>Next</Button>
    ) : (
      ''
    )

  return (
    <div className='button-container'>
      {lastButton}
      {nextButton}
    </div>
  )
}

const ResultsPage = () => {
  const [state, dispatch] = useContext(StoreContext)

  //After hitting next or last page, page rerenders,
  //and triggers useEffect to Scroll to top again
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='results-body'>
        <ResultsBar />
          <section className='results'>
          {state.results.map((result, index) => (
            <Result
              rawName={result._embedded}
              key={index}
              pics={result.images}
              date={result.dates.start.localDate}
              title={result.name}
              venue={result._embedded.venues[0].name}
              tmLink={result.url}
            />
            ))}
            <Pagination />
            </section>
      </div>
  )
}

export default ResultsPage
