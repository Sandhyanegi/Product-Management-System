import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <a class="navbar-brand" href="#">Product Management System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link to="/list" class="nav-link" href="#">Poduct List <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link to="add" class="nav-link" href="#">Add Product <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
