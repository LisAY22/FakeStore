import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

/* createRoot defines the HTML element where a React component should be displayed. */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The BrowserRouter component enables routing in the app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
