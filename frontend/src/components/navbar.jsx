import React from 'react'

function Navbar() {
    let pathname = window.location.pathname;
    let detailView = pathname === "/detail" ? true : false;
    
    let detailClass = detailView ? "nav-link active" : "nav-link";
    let weekClass = !detailView ? "nav-link active" : "nav-link";
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-tabs">
          <li className="nav-item">             
                <a className={detailClass} aria-current="page" href="/detail">Detail View</a>         
          </li>
          <li className="nav-item">           
                <a className={weekClass} aria-current="page" href="/week">Week View</a>           
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}

export default Navbar
