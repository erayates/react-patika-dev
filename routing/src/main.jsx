import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import About from './components/About'
import Products from './components/Products'
import Users from './components/Users'

import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
   { 
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/users',
    element: <Users />
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
