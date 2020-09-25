import React from "react";
import { Link } from "react-router-dom";
import { Preloader } from "../components";

function Home() {
  return (
    <>
      <Preloader timeOut={500}/>
      <section className="error404 bg-dark text-light p-5">
        <div className="container text-center">
          <h1>Error 404</h1>
          <p className="mb-4">Págia no encontrada</p>
          <div className="d-block">
            <Link to="/">Inicio</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
