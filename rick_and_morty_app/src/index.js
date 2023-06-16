import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


//Estilos globales
import "./Global.css"
import "./normalize.css"

ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>,
  document.getElementById('root')
)
