import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-warning ">
  <div className="container ">
    <Link className="navbar-brand" to="/"><span className='text-danger'>E</span>-Shopping</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2"  aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2" aria-current="page" to="/gallary">Gallary</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2" aria-current="page" to="/download">Download</Link>          
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2" aria-current="page" to="/about">About</Link>          
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2" aria-current="page" to="/contact">Contact</Link>          
        </li>

      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Nav
