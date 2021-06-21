import React from "react";
import './Navbar.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" width='100' alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <form class="d-flex">
        <input class="form-control no-border" type="search" placeholder="What are you looking for? " aria-label="Search"/>
      
      </form>
      </ul>
      <span class="navbar-text">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">العربية</a>
        </li>
        <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   <span className='ship_to'>Ship to </span> 
   
   UAE
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a className="dropdown-item" href="#">Saudia Arabia</a></li>
    <li><a className="dropdown-item" href="#">Turkey</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Damam</a></li>
  </ul>
</li>


        <li class="nav-item">
          <a class="nav-link" href="#">Sign In <AccountCircleOutlinedIcon className='cart_icon' /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart <ShoppingCartOutlinedIcon className='cart_icon'/></a>
        </li>
      </ul>
      </span>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
