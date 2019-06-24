import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ResultsPage from './components/ResultsPage'

function App () {
  return (
    <main className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/results' component={ResultsPage} />
        </Switch>
      </Router>
    </main>
  )
}

export default App

