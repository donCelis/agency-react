import React from "react";

function App() {
  return (
    <section>
      <section className="inicio">
        <header className="cabecera">
          <a className="logo" href="#">
            <div className="logoSvg">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 65.2 65.2">
                <path
                  className="rellenoSvg"
                  d="M32.6,0.1C14.7,0.1,0.1,14.7,0.1,32.6s14.6,32.5,32.5,32.5s32.5-14.6,32.5-32.5S50.5,0.1,32.6,0.1z M7.2,43.1
						c-1.4-3.2-2.1-6.8-2.1-10.6c0-15.2,12.4-27.5,27.5-27.5c5.6,0,11,1.7,15.3,4.6C42.7,27.9,26.6,41.6,7.2,43.1z"
                />
              </svg>
            </div>
            Agency
          </a>
          <nav className="redesSociales">
            <a className="fab fa-facebook-f" href="#"></a>
            <a className="fab fa-twitter" href="#"></a>
            <a className="fab fa-google-plus-g" href="#"></a>
            <a className="fab fa-linkedin-in" href="#"></a>
            <a className="fab fa-behance" href="#"></a>
          </nav>
        </header>
        <section className="menuPrincipal">
          <nav className="menu">
            <ul className="izquierda">
              <li href="#">
                <i className="fas fa-book-open"></i>
                <span>About</span>
              </li>
              <li href="#">
                <i className="fas fa-drafting-compass"></i>
                <span>Skills</span>
              </li>
              <li href="#">
                <i className="fas fa-file-alt"></i>
                <span>Resume</span>
              </li>
            </ul>
            <ul className="centro">
              <li href="#">
                <i className="fas fa-briefcase"></i>
                <span>Our Work</span>
              </li>
            </ul>
            <ul className="derecha">
              <li href="#">
                <i className="fas fa-pencil-alt"></i>
                <span>Blog</span>
              </li>
              <li href="#">
                <i className="fas fa-map-marked-alt"></i>
                <span>Contact</span>
              </li>
              <li href="#">
                <i className="fas fa-comment-alt"></i>
                <span>Feedback</span>
              </li>
            </ul>
          </nav>
        </section>
        <footer className="piePagina">
          <p>
            Copyright © <span>Alexander Celis</span>, 2020
          </p>
        </footer>
      </section>
    </section>
  );
}

export default App;
