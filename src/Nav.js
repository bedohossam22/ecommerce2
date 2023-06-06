import React from 'react';
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
      <ul>
      <li> <Link to="/ecommerce">Home</Link></li> 
      <li> <Link to="/shop">Shop</Link></li> 
      <li> <Link to="/myaccount">MyAccount</Link> </li>
      <li> <Link to="/ecommerce">Compare</Link> </li>
      <li> <Link to="/forms">Login</Link> </li>
       

      </ul>
    </nav>
  );
}