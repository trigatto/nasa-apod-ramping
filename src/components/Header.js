import React from "react";
import { Link } from "react-router-dom";
import logo from "./nasa_logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="NASA Logo" className="header__logo" />
      </Link>

      <h1 className="header__title">Astronomy Picture Of the Day</h1>
    </header>
  );
}

export default Header;
