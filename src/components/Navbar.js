import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Welcome to SCMS !! </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <div className='d-flex justify-content-end'>
                <li className="nav-item">
                    <a className="nav-link active" href="/about">About</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar

