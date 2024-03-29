import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />

  </Router>,
)
