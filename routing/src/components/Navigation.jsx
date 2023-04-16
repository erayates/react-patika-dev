import React from 'react'

import { Link, useMatch} from 'react-router-dom'

function Navigation() {
 
  return (
        <ul style={{display: "flex", justifyContent: "space-between", width: "100%s"}}>
            <li>
            <Link to="/about" className="">About</Link>
            </li>
            <li>
            <Link to="/products" className="">Products</Link>
            </li>
            <li>
            <Link to="/users" className="">Users</Link>
            </li>
        </ul>
  )
}

export default Navigation