import React from 'react'
import ReactDOM from 'react-dom'
import Store from './store'
import './components/styling/sass/main.scss'
import App from './App'

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
)
