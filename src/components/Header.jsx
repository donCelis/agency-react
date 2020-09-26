import React from "react";
import logo from "../assets/img/logo.svg";

const Header = () => {
  const anchore = [
    {
      class: "fab fa-facebook-f",
      link: "https://www.fb.com",
    },
    {
      class: "fab fa-twitter",
      link: "https://www.twitter.com",
    },
    {
      class: "fab fa-google-plus-g",
      link: "https://www.google.com",
    },
    {
      class: "fab fa-linkedin-in",
      link: "https://www.linkedin.com",
    },
    {
      class: "fab fa-behance",
      link: "https://www.behance.net",
    },
  ];

  return (
    <header className="py-5">
      <h1 className="d-flex align-items-center logo">
        <img className="img-fluid" src={logo} alt="Agency App" />
        Agency
      </h1>
      <div className="socials">
        {anchore.map((name, index) => (
          <a
            key={index}
            className={name.class}
            href={name.link}
            rel="noopener noreferrer"
            aria-label={name.link}
            target="_blank"
          ></a>
        ))}
      </div>
    </header>
  );
};

export default Header;
