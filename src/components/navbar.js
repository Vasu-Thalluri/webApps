import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = ()=> {
  return(
    <nav className='navbar'>
      <h2>ShopNest</h2>
      <div>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/product">Products</Link>
      </div>
    </nav>
  )
}

export default Navbar;