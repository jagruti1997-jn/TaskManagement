import React from 'react';
import {Link} from 'react-router-dom'
import '../pages/pages.css'
const Header = () => {
  return (
   <div className='header'>
    <h2 className='logo'>Task List</h2>
    <nav>
     <ul className='nav_link'>
      <li><a href='/' >Sign In</a></li>
      <li><a href='/register '> Sign Up</a></li>
      <li><a href='/home/:id/:people'>Home</a></li>
     </ul>
    </nav>
   </div>
  )
}

export default Header;