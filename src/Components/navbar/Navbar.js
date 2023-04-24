import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from '../../assets/logo.png'
import './navbar.css' 
import CartWidget from "../cartwidget/CartWidget";






const Navbar=()=>{
    const [menu, setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
          
    }
    const comprobar=()=>{
        if(menu===true){
            toggleMenu()
        }
    }
    
    return(
        
        <header onClick={comprobar}>
           <Link to={"/"} ><img className="logo" src={logo} alt="" /></Link>
           
 
           <button onClick={toggleMenu} className="menu-boton">
           <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
           </button>
           <nav className={ `nav__page ${menu ? 'isActive' : ''}` }>
        <ul className="nav__ul">
        <Link to={'/cart'}><CartWidget/></Link>
            <Link to={`/detail/shablones`} ><li className="nav__li">Shablones</li> </Link>
            <Link to={`categoria/insumos`}><li className="nav__li">Insumos</li></Link>
            
            <Link to={'/detail/remeras'}><li className="nav__li">Remeras</li></Link>
            <Link to={'detail/bajadas'} ><li className="nav__li">Bajadas en gran formato</li></Link>
            <Link to={'categoria/accesorios'}><li className="nav__li">Accesorios</li></Link>
            <Link to={'/nosotros'}><li className="nav__li">Nosotros</li>  </Link>
            
            
           
        </ul>
       </nav>
       
           
        </header>
     
    )
}

export default Navbar