import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div>
      <ul>
      <li > <Link to="/AdminLpage"> Admin </Link> </li>
      <li > <Link to="/UserLpage"> User </Link> </li>
      </ul>
    </div>
  )
}

export default Landingpage
