import React from "react";
import bucket from "../../assets/bucket.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import "./Heder.css";
export default function Header() {
  return (
    <div className="container">
      <nav>
        <div>
          <img src={logo} alt="Image-logos" />
        </div>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
        <div>
          <img className="search" src={search} alt="" />
          <input type="text" placeholder="Search" />
          <img className="bucket" src={bucket} alt="" />
        </div>
      </nav>
    </div>
  );
}
