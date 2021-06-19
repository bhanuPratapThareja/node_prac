import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { readCookie } from './utils/cookies'
import './index.css'

axios.interceptors.request.use(config => {
  return config
})

// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   console.log('interceptor err: ', error.response);
//   return Promise.reject(error)
// })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)