import React from 'react'
import ReactDOM from 'react-dom'
import './tailwind.css'
import App from './App'
import axios from 'axios'

axios.get('https://artificialbackend.herokuapp.com/arts').then((res)=>{
  console.log(res);
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
