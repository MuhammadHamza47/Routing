import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <link to={"index"} className="nav-link" href="/">Home <span className="sr-only">(current)</span></link>
      </li>
      <li className="nav-item">
        <link to={"menu"} className="nav-link" href="/">Menu</link>
      </li>
      <li className="nav-item">
        <link to={"about"} className="nav-link" href="/">About</link>
      </li>
      <li className="nav-item">
        <link to={"contact"} className="nav-link " href="/">Contact</link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Header
