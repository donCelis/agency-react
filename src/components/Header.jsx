import React from "react";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-5">
      <h1 className="d-flex align-items-center logo">
        <img className="img-fluid" src={logo} alt="Agency App" />
        Agency
      </h1>
      <div className="socials">
        <a className="fab fa-facebook-f" href="#"></a>
        <a className="fab fa-twitter" href="#"></a>
        <a className="fab fa-google-plus-g" href="#"></a>
        <a className="fab fa-linkedin-in" href="#"></a>
        <a className="fab fa-behance" href="#"></a>
      </div>
    </header>
  );
};

export default Header;
