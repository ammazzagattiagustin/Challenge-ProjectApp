import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 backgroundColor">
      <nav className="navbar backgroundColor navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          <img src={Logo} alt="logo" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
