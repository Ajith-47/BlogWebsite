import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
    <header>
        
        <div className="header-logo"> 
          <h1><Link to="/">YourBlog</Link></h1>
        </div>

        <div className="header-navbar">
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
    </header>
    )
}

export default Header