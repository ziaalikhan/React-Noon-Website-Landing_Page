import React from "react";
import './Nav.css';

function Nav() {
  return (
    <div className="Navs">
        
        <div className="categories">
        <div class="btn-group">
          <button
            type="button"
            class="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           ALL CATEGORIES 
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <button class="dropdown-item" type="button">
               Bikes
              </button>
            </li>
            
            <li>
              <button class="dropdown-item" type="button">
                Fitness
              </button>
              
            </li>
            
            <li>
              <button class="dropdown-item" type="button">
                Gaming
              </button>
            </li>
            <hr />
            <li>
              <button class="dropdown-item" type="button">
               Appliances
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Computers
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Electronics
              </button>
            </li>
          </ul>
        </div>

          
            <p>ELECTRONICS</p>
            <p>MENS</p>
            <p>WOMENS</p>
            <p>HOME</p>
            <p>BEAUTY & FRAGRANCE</p>
            <p>BOYS & TOYS</p>
            <p>GROSERY</p>
            <p>SPORTS</p>
            <p>DUBAI MALL STORE</p>

        </div>
        
    </div>
  );
}

export default Nav;


// <p>ELECTRONICS</p>
// <p>MENS</p>
// <p>WOMEMS</p>
// <p>HOME</p>
// <p>BEAUTY & FRAGRANCE</p>
// <p>BOYS & TOYS</p>
// <p>GROSERY</p>
// <p>SPORTS</p>
// <p>DUBAI MALL STORE</p>
