import React from "react";
import { Header, Content, Preloader } from "../components";

function Home() {
  return (
    <>
      <Preloader />
      <div className="container">
        <Header />
        <Content />
        <footer></footer>
      </div>
    </>
  );
}

export default Home;
