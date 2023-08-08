import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import fgImg from "../../assets/image 57.png";
import vectorImg from "../../assets/Vector 260.png";
import mainImg from "../../assets/image 72.png";

import "../../styles/style.css";

const Blog = () => {
  const blogSection = () => {
    return (
      <section id="blog-section">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-down-right"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <div className="box">
                <img src={fgImg} width="100%" />
                <h2
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Logistic Insights Unleashed
                </h2>
                <h6>
                  Discover the Key Strategies, Cutting-Edge Technologies, and
                  Industry Trends in Our Informative Blog Section
                </h6>
                <Link to="/Blog" className="blog-btn">
                  Read Blog{" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    src={vectorImg}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <div className="box">
                <img
                  style={{
                    display: "inline-block",
                  }}
                  src={fgImg}
                  width="100%"
                />
                <h2
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Logistic Insights Unleashed
                </h2>
                <h6>
                  Discover the Key Strategies, Cutting-Edge Technologies, and
                  Industry Trends in Our Informative Blog Section
                </h6>
                <Link to="/Blog" className="blog-btn">
                  Read Blog{" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    src={vectorImg}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-down-left"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <Link to="/Blog">Read Blog</Link>{" "}
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                We Finibus Bonorum et Malorum", written by Cicero in 45 BC
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <Link to="/Blog">Read Blog</Link>{" "}
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Written by Cicero in 45 BC
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut{" "}
              </p>
              <Link to="/Blog">Read Blog</Link>{" "}
            </div>
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
              data-aos="zoom-in"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <h3>The Science Behind SmartUV</h3>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12"
              data-aos="fade-down-right"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <div className="box">
                <img src={fgImg} width="100%" />
                <h2>Logistic Insights Unleashed</h2>
                <h6>
                  Discover the Key Strategies, Cutting-Edge Technologies, and
                  Industry Trends in Our Informative Blog Section
                </h6>
                <Link to="/Blog" className="blog-btn">
                  Read Blog{" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    src={vectorImg}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <div className="box">
                <img src={fgImg} width="100%" />
                <h2
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Logistic Insights Unleashed
                </h2>
                <h6>
                  Discover the Key Strategies, Cutting-Edge Technologies, and
                  Industry Trends in Our Informative Blog Section
                </h6>
                <Link to="/Blog" className="blog-btn">
                  Read Blog{" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    src={vectorImg}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <div className="box">
                <img src={fgImg} width="100%" />
                <h2
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Logistic Insights Unleashed
                </h2>
                <h6>
                  Discover the Key Strategies, Cutting-Edge Technologies, and
                  Industry Trends in Our Informative Blog Section
                </h6>{" "}
                <Link to="/Blog" className="blog-btn">
                  Read Blog{" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    src={vectorImg}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12"
              data-aos="fade-down-left"
              data-aos-delay={200}
              data-aos-once="true"
            >
              <div className="box">
                <img src={fgImg} width="100%" />
                <h2
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Logistic Insights Unleashed
                </h2>
                <h6>
                  Discover the Key Strategies, Cutting-Edge Technologies, and
                  Industry Trends in Our Informative Blog Section
                </h6>
                <Link to="/Blog" className="blog-btn">
                  Read Blog{" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    src={vectorImg}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12"
              data-aos="fade-down-right"
              data-aos-delay={200}
              data-aos-once="true"
              style={{ marginTop: "5%" }}
            >
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <Link to="/Blog">Read Blog</Link>
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                We Finibus Bonorum et Malorum", written by Cicero in 45 BC
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <Link to="/Blog">Read Blog</Link>{" "}
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Written by Cicero in 45 BC
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut{" "}
              </p>
              <Link to="/Blog">Read Blog</Link>{" "}
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12"
              data-aos="fade-down-left"
              data-aos-delay={200}
              data-aos-once="true"
              style={{ marginTop: "5%" }}
            >
              <img src={mainImg} width="100%" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {blogSection()}
    </>
  );
};

export default Blog;
