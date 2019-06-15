import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ResultsPage from './components/ResultsPage'

function App () {
  return (
    <main className='App'>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/results' component={ResultsPage} />
    </main>
  )
}

export default App
