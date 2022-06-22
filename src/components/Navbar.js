import React from 'react'
import { NavLink} from "react-router-dom"
import "../App.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <div className="navbar-heading">
    <NavLink className="navbar-brand text-white" to="/about" style={{fontSize:"15px"}}>Yasir191491</NavLink>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/portfolio" style={{fontSize:"15px"}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project" style={{fontSize:"15px"}}>Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sidebar" style={{fontSize:"15px"}}>Sidebar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/redux" style={{fontSize:"15px"}}>Redux</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/addproduct" style={{fontSize:"15px"}}>Add_Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product" style={{fontSize:"15px"}}>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/updateproduct/1" style={{fontSize:"15px"}}>Update_Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/card" style={{fontSize:"15px"}}>Cards</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" style={{fontSize:"15px"}}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" style={{fontSize:"15px"}}>Contact</NavLink>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar