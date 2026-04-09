import React from 'react'
import { Link } from 'react-router-dom'; 
import './nav.css'


function Nav(){
    return(
       
        <div className='nav'>
             <nav>
            
                <Link to="/">Home</Link>
               <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
           
            </nav>
        
        </div>
        
    )

     
}
export default Nav;