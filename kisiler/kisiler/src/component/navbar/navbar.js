import React from 'react'

import "./navbar.scss";


export default function navbar() {
  return (
   <nav className='navbar' >
      <ul className='nav-links' >
        <li>
          <a className='nav-link' href='/' >  home </a>
        </li>
        <li>
          <a className='nav-link' href='/' >  about </a>
        </li>
        <li>
          <a className='nav-link active' href='/' >  tours </a>
        </li>
      </ul>
  
   </nav>
      
     
  )
}
