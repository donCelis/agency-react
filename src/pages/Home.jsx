import React from "react";
import { Header, Content, Preloader } from "../components";

function Home() {
  return (
    <>
      <Preloader />
      <section className="main">
      <div className="container">
        <Header />
        <Content />
        <footer></footer>
      </div>
      </section>
    </>
  );
}

export default Home;
