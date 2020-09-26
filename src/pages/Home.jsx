import React from "react";
import { Header, Content, Preloader, Footer } from "../components";

function Home() {
  return (
    <>
      <Preloader />
      <section className="main">
        <div className="container">
          <Header />
          <Content />
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Home;
