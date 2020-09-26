import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <nav className="py-5 content">
      <div className="row text-center content__items">
        <div className="col-md-12 col-lg-4 mb-4">
          <article>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb-4">
                <div>
                  <Link to="/about">
                    <i className="fas fa-book-open"></i>
                    <span>About</span>
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mb-4">
                <div>
                  <Link to="/skills">
                    <i className="fas fa-drafting-compass"></i>
                    <span>Skills</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <Link to="/resume">
                    <i className="fas fa-file-alt"></i>
                    <span>Resume</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-12 col-lg-4 mb-4">
          <article className="h-100 item-center">
            <div className="row no-gutters h-100">
              <div className="col-sm-12">
                <article className="h-100">
                  <Link to="/works" className="h-100">
                    <i className="fas fa-briefcase"></i>
                    <span>Our Work</span>
                  </Link>
                </article>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-12 col-lg-4 mb-4">
          <article>
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <Link to="/blog">
                    <i className="fas fa-pencil-alt"></i>
                    <span>Blog</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 mt-4">
                <div>
                  <Link to="/contact">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-4">
                <div>
                  <Link to="/feed">
                    <i className="fas fa-comment-alt"></i>
                    <span>Feedback</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </nav>
  );
};

export default Content;
