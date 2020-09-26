import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-5">
      <p className="m-0">Copyright © <strong>Alexander Celis</strong>, {year}</p>
    </footer>
  );
};

export default Footer;
