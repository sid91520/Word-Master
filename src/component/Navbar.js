// import React,{useState} from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (    
    <div>
<nav className={`navbar navbar-expand-lg border border-dark navbar-${props.mode1} bg-${props.mode1}`}>
  <div className="container-fluid" >
    <img src="document.png" alt="Logo" width="40" height="40" className="d-inline-block"/>
    <span className="navbar-brand">{props.title}</span>
    <ul className="nav justify-content-end">
    <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
      <li className="nav-item my-2">
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label text-danger" htmlFor="flexSwitchCheckDefault">{props.text1}</label>
</div>
      </li>
    </ul>

  </div>
</nav>

    </div>
  )
}

Navbar.propTypes={
    title:propTypes.string,
}
// Navbar.defaultProps={
//     title:"Word Master"
// }