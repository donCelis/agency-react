import React from "react";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between py-5">
      <h1 className="m-0 d-inline-flex align-items-center logo">
        <img className="img-fluid" src={logo} alt="Agency App"/>
        <span>Agency</span>
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
