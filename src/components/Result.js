import React from 'react'
import { Button } from 'react-bootstrap'

const Result = props => 
  <div className='container'>
    <img src={props.img} />
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

export default Result
