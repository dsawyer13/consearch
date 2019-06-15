import React, { useEffect }  from 'react'
import NavBar from './NavBar'
// import Result from './Result'
import { useSelector, useDispatch } from 'react-redux'
import {FETCH_RESULTS} from '../actions/index'

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